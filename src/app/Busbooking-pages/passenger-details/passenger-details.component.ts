import { Component, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { SharedService } from '../../services/shared.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-passenger-details',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './passenger-details.component.html',
  styleUrl: './passenger-details.component.css'
})
export class PassengerDetailsComponent implements OnInit {
   busId!: number;

  busDetails: any;

  selectedSeats: string[] = [];

  totalFare: number = 0;

   passenger = {
    fullName: '',
    address: '',
    phone: '',
    email: ''
  };

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private busService: SharedService
  ) {}

  ngOnInit(): void {

    this.busId = Number(
      this.route.snapshot.paramMap.get('busId')
    );

    // Get selected seats and fare
    const navigation = history.state;

    this.selectedSeats = navigation.selectedSeats || [];

    this.totalFare = navigation.totalFare || 0;

    // Get bus details
    this.busService.getBusById(this.busId).subscribe(res => {

      this.busDetails = res;

    });

  }
  locationMap: Record<number, string> = {

    1: 'Mumbai',
    2: 'Pune',
    3: 'Satara',
    4: 'Kolhapur',
    5: 'Goa'

};

getLocationName(id: number): string {

    return this.locationMap[id] || '';

}

continueToPayment(form: any): void {

    if (form.invalid) {
      form.control.markAllAsTouched();
      return;
    }

    this.router.navigate(
      ['/app-componnent-3/app-payment', this.busId],
      {
        state: {
          selectedSeats: this.selectedSeats,
          totalFare: this.totalFare,
          passenger: this.passenger
        }
      }
    );
  }
  

goBack(): void {

    this.router.navigate(
      ['/app-componnent-3/app-booking', this.busId],
      {
        state: {
          selectedSeats: this.selectedSeats,
          totalFare: this.totalFare
        }
      }
    );
  }


}
