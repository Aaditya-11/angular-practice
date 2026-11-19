import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-booking',
  standalone: true,
  imports: [],
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent implements OnInit {

  busId!: number;
  busDetails: any;

  selectedSeats: string[] = [];

  seatRows = [
    ['A1', 'A2', 'A3', 'A4'],
    ['B1', 'B2', 'B3', 'B4'],
    ['C1', 'C2', 'C3', 'C4'],
    ['D1', 'D2', 'D3', 'D4'],
    ['E1', 'E2', 'E3', 'E4'],
    ['F1', 'F2', 'F3', 'F4'],
    ['G1', 'G2', 'G3', 'G4'],
    ['H1', 'H2', 'H3', 'H4'],
    ['I1', 'I2', 'I3', 'I4']
  ];

  constructor(
    private route: ActivatedRoute,
    private busService: SharedService,
    private location: Location,
    private router: Router
  ) {}

  ngOnInit(): void {

    this.busId = Number(
      this.route.snapshot.paramMap.get('busId')
    );

    this.busService.getBusById(this.busId).subscribe(res => {

      this.busDetails = res;

      console.log('Bus Details:', this.busDetails);
      console.log('Available Seats:', this.busDetails.seatsAvailable);

    });
  }


  getFromName(id: number): string {
    return this.locationMap[id] || '';
  }

  getToName(id: number): string {
    return this.locationMap[id] || '';
  }


  private locationMap: Record<number, string> = {
    1: 'Mumbai',
    2: 'Pune',
    3: 'Satara',
    4: 'Kolhapur',
    5: 'Goa'
  };


  // --------------------------------
  // Check if seat is available
  // --------------------------------

  isAvailable(seat: string): boolean {

    if (!this.busDetails) {
      return false;
    }

    const availableSeats = Number(
      this.busDetails.seatsAvailable
    );

    const allSeats = this.seatRows.flat();

    const seatIndex = allSeats.indexOf(seat);

    return seatIndex < availableSeats;
  }


  // --------------------------------
  // Check selected seat
  // --------------------------------

  isSelected(seat: string): boolean {

    return this.selectedSeats.includes(seat);

  }


  // --------------------------------
  // Select / Deselect seat
  // --------------------------------

  toggleSeat(seat: string): void {

    // Don't allow booked seats
    if (!this.isAvailable(seat)) {
      return;
    }

    if (this.isSelected(seat)) {

      this.selectedSeats =
        this.selectedSeats.filter(
          s => s !== seat
        );

    } else {

      this.selectedSeats.push(seat);

    }
  }


  // --------------------------------
  // Selected seat count
  // --------------------------------

  get selectedSeatCount(): number {

    return this.selectedSeats.length;

  }


  // --------------------------------
  // Total fare
  // --------------------------------

  get totalFare(): number {

    if (!this.busDetails) {
      return 0;
    }

    return (
      Number(this.busDetails.fare) *
      this.selectedSeats.length
    );

  }


  // --------------------------------
  // Back
  // --------------------------------

  goBack(): void {

    this.location.back();

  }


  // --------------------------------
  // Proceed
  // --------------------------------

  proceed(): void {

    if (this.selectedSeats.length === 0) {
      return;
    }
    this.router.navigate(
        ['/app-componnent-3/app-passenger-details', this.busId],
        {
            state: {
                selectedSeats: this.selectedSeats,
                totalFare: this.totalFare
            }
        }
    );

  }

}
