import { Component, inject, OnInit } from '@angular/core';
import { MasterService } from '../../service/master.service';
import { Observable } from 'rxjs';
import { AsyncPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { of } from 'rxjs';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-search',
  standalone: true,
  imports: [AsyncPipe, DatePipe, FormsModule, RouterLink],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent implements OnInit {
  // dependency injection
  // constructor(private masterSer:MasterService){}
  // injection
  masterSrv = inject(MasterService);
  busList: any[] = [];
  today: string = '';
  searchObj: any = {
    fromLocation: '',
    toLocation: '',
    travelDate: '',
  };
  locations$: Observable<any[]> = new Observable<any[]>();
  ngOnInit(): void {
     const currentDate = new Date();
    this.today = currentDate.toISOString().split('T')[0];
    this.getAllocations();
  }

  onFromChange() {
    if (this.searchObj.fromLocation === this.searchObj.toLocation) {
      this.searchObj.toLocation = '';
    }
  }

  onToChange() {
    if (this.searchObj.fromLocation === this.searchObj.toLocation) {
      this.searchObj.fromLocation = '';
    }
  }
  getAllocations() {
    this.locations$ = this.masterSrv.getLocations();
  }
  segmentDurations: Record<string, number> = {
    '1-2': 180, // Mumbai → Pune (3h)
    '2-3': 120, // Pune → Satara (2h)
    '3-4': 180, // Satara → Kolhapur (3h)
    '4-5': 120, // Kolhapur → Goa (2h)
  };
  routeStops = [
    { id: 1, name: 'Mumbai' },
    { id: 2, name: 'Pune' },
    { id: 3, name: 'Satara' },
    { id: 4, name: 'Kolhapur' },
    { id: 5, name: 'Goa' },
  ];
  formatDuration(minutes: number): string {
    if (!minutes) return 'N/A';
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;

    return `${hours}h ${mins}m`;
  }
  getDurationMinutes(from: number, to: number): number {
    if (!from || !to || from === to) return 0;
    const ids = this.routeStops.map((s) => s.id);
    const start = ids.indexOf(from);
    const end = ids.indexOf(to);
    if (start === -1 || end === -1) return 0;
    let total = 0;
    const step = start < end ? 1 : -1;
    for (let i = start; i !== end; i += step) {
      const a = ids[i];
      const b = ids[i + step];
      const segment =
        this.segmentDurations[`${a}-${b}`] ||
        this.segmentDurations[`${b}-${a}`];
      if (!segment) return 0;
      total += segment;
      // console.log('Checking segment', `${a}-${b}`);
    }

    return total;
  }

  getArrivalTime(dep: string, from: number, to: number): string {
    const duration = this.getDurationMinutes(from, to);
    if (!duration) return 'N/A';
    const [h, m] = dep.split(':').map(Number);
    const total = h * 60 + m + duration;
    const ah = Math.floor((total % 1440) / 60);
    const am = total % 60;
    return `${ah.toString().padStart(2, '0')}:${am
      .toString()
      .padStart(2, '0')}`;
  }

  getArrivalDayLabel(departureTime: string, from: number, to: number): string {
    const durationMinutes = this.getDurationMinutes(from, to);
    const [h, m] = departureTime.split(':').map(Number);
    const total = h * 60 + m + durationMinutes;
    return total >= 1440 ? 'Next Day' : 'Same Day';
  }
  segmentFares: Record<string, number> = {
  '1-2': 1000, // Mumbai → Pune
  '2-3': 700,  // Pune → Satara
  '3-4': 300,  // Satara → Kolhapur
  '4-5': 500   // Kolhapur → Goa
};
getFare(from: number, to: number): number {
  if (!from || !to || from === to) return 0;

  const ids = this.routeStops.map(s => s.id);
  const start = ids.indexOf(from);
  const end = ids.indexOf(to);

  if (start === -1 || end === -1) return 0;

  let totalFare = 0;
  const step = start < end ? 1 : -1;

  for (let i = start; i !== end; i += step) {
    const a = ids[i];
    const b = ids[i + step];

    const fare =
      this.segmentFares[`${a}-${b}`] ||
      this.segmentFares[`${b}-${a}`];

    if (!fare) return 0; // invalid route

    totalFare += fare;
  }

  return totalFare;
}


  onSearch() {
    const from = Number(this.searchObj.fromLocation);
    const to = Number(this.searchObj.toLocation);
    

    // console.log('DEBUG TYPES', typeof from, typeof to);
    

    this.masterSrv
      .searchBus(from, to, this.searchObj.travelDate)
      .subscribe((res) => (this.busList = res));
  }
}
