import { Component, OnInit, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { CommonModule } from '@angular/common';
import jsPDF from 'jspdf';

declare var Razorpay: any;

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.css',
})
export class PaymentComponent implements OnInit {
  busId!: number;

  busDetails: any;

  selectedSeats: string[] = [];

  totalFare: number = 0;

  passenger: any = {};

  paymentSuccess: boolean = false;
  paymentId: string = '';
  discount: number = 0;
  finalAmount: number = 0;

  appliedOffer: string = '';
  offerMessage: string = '';

  private locationMap: Record<number, string> = {
    1: 'Mumbai',
    2: 'Pune',
    3: 'Satara',
    4: 'Kolhapur',
    5: 'Goa',
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private busService: SharedService,
    private ngZone: NgZone,
  ) {}

  ngOnInit(): void {
    // Get bus ID from URL
    this.busId = Number(this.route.snapshot.paramMap.get('busId'));

    // Get data passed from Passenger Details
    const navigation = history.state;

    this.selectedSeats = navigation.selectedSeats || [];

    this.totalFare = navigation.totalFare || 0;

    this.finalAmount = this.totalFare;

    this.passenger = navigation.passenger || {};

    // Get bus details
    this.busService.getBusById(this.busId).subscribe((res) => {
      this.busDetails = res;
    });
  }

  getLocationName(id: number): string {
    return this.locationMap[id] || '';
  }

  applyOffer(offerCode: string): void {
    // If the currently applied offer is clicked again,
    // remove the offer
    if (this.appliedOffer === offerCode) {
      this.discount = 0;
      this.appliedOffer = '';
      this.offerMessage = '';
      this.finalAmount = this.totalFare;

      return;
    }

    // Reset previous offer before applying a new one
    this.discount = 0;
    this.appliedOffer = '';
    this.offerMessage = '';
    this.finalAmount = this.totalFare;

    // FIRST10
    if (offerCode === 'FIRST10') {
      this.discount = Math.round(this.totalFare * 0.1);

      this.appliedOffer = 'FIRST10';

      this.offerMessage = '10% discount applied successfully.';
    }

    // WEEKEND100
    else if (offerCode === 'WEEKEND100') {
      const travelDate = new Date(this.busDetails?.travelDate);

      const day = travelDate.getDay();

      // Sunday = 0
      // Saturday = 6
      if (day === 0 || day === 6) {
        this.discount = 100;

        this.appliedOffer = 'WEEKEND100';

        this.offerMessage = '₹100 weekend discount applied successfully.';
      } else {
        this.offerMessage = 'WEEKEND100 is valid only for Saturday and Sunday.';

        return;
      }
    }

    // FAMILY20
    else if (offerCode === 'FAMILY20') {
      if (this.selectedSeats.length >= 3) {
        this.discount = Math.round(this.totalFare * 0.2);

        this.appliedOffer = 'FAMILY20';

        this.offerMessage = '20% family discount applied successfully.';
      } else {
        this.offerMessage = 'FAMILY20 requires booking 3 or more seats.';

        return;
      }
    }

    // Calculate final amount
    this.finalAmount = this.totalFare - this.discount;
  }

  payNow(): void {
    const options = {
      // Use your Razorpay TEST Key ID here
      key: 'rzp_test_TdWhlOOob1Q0dt',

      // Razorpay expects amount in paise
      amount: this.finalAmount * 100,

      currency: 'INR',

      name: 'SHINDE TRAVELS',

      description: 'Bus Ticket Booking',

      prefill: {
        name: this.passenger?.fullName || '',
        email: this.passenger?.email || '',
        contact: this.passenger?.phone || '',
      },

      theme: {
        color: '#d71920',
      },

      handler: (response: any) => {
        console.log('Payment Successful');

        console.log('Payment ID:', response.razorpay_payment_id);

        this.ngZone.run(() => {
          this.paymentSuccess = true;

          this.paymentId = response.razorpay_payment_id;
        });
      },

      modal: {
        ondismiss: () => {
          console.log('Payment cancelled');
        },
      },
    };

    const razorpay = new Razorpay(options);

    razorpay.open();
  }

  downloadTicket(): void {
    const doc = new jsPDF();

    // Header
    doc.setFillColor(215, 25, 32);
    doc.rect(0, 0, 210, 35, 'F');

    doc.setTextColor(255, 255, 255);
    doc.setFontSize(22);
    doc.setFont('helvetica', 'bold');
    doc.text('SHINDE TRAVELS', 105, 15, { align: 'center' });

    doc.setFontSize(13);
    doc.setFont('helvetica', 'normal');
    doc.text('BUS TICKET', 105, 25, { align: 'center' });

    // Payment status
    doc.setTextColor(215, 25, 32);
    doc.setFontSize(18);
    doc.setFont('helvetica', 'bold');
    doc.text('PAYMENT SUCCESSFUL', 105, 50, {
      align: 'center',
    });

    // Booking information
    doc.setTextColor(40, 40, 40);
    doc.setFontSize(11);

    let y = 70;

    doc.setFont('helvetica', 'bold');
    doc.text('Booking Details', 20, y);

    y += 12;

    doc.setFont('helvetica', 'normal');

    doc.text(`Payment ID: ${this.paymentId}`, 20, y);
    y += 9;

    doc.text(`Passenger: ${this.passenger?.fullName || ''}`, 20, y);
    y += 9;

    doc.text(`Bus: ${this.busDetails?.busName || ''}`, 20, y);
    y += 9;

    doc.text(
      `Route: ${this.getLocationName(this.busDetails?.fromLocation)} to ${this.getLocationName(this.busDetails?.toLocation)}`,
      20,
      y,
    );
    y += 9;

    doc.text(`Travel Date: ${this.busDetails?.travelDate || ''}`, 20, y);
    y += 9;

    doc.text(`Departure: ${this.busDetails?.departureTime || ''}`, 20, y);
    y += 9;

    doc.text(`Selected Seats: ${this.selectedSeats.join(', ')}`, 20, y);

    // Amount box
    y += 18;

    doc.setFillColor(255, 241, 241);
    doc.roundedRect(20, y, 170, 20, 3, 3, 'F');

    doc.setTextColor(80, 80, 80);
    doc.setFont('helvetica', 'normal');
    doc.text('Amount Paid', 30, y + 13);

    doc.setTextColor(215, 25, 32);
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(16);
    doc.text(`Rs ${this.finalAmount}`, 180, y + 13, { align: 'right' });

    // Footer
    doc.setTextColor(100, 100, 100);
    doc.setFontSize(10);
    doc.setFont('helvetica', 'normal');

    doc.text('Thank you for travelling with SHINDE TRAVELS!', 105, 270, {
      align: 'center',
    });

    doc.text('Please carry this ticket during your journey.', 105, 278, {
      align: 'center',
    });

    // Automatic download
    doc.save('Shinde_Travels_Ticket.pdf');
  }

  goToMainPage(): void {
    this.router.navigate(['/app-componnent-3/app-search']);
  }
}
