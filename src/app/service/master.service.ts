import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/Employee';
import { Observable ,of } from 'rxjs';
import { Bus } from '../models/bus';

@Injectable({
  providedIn: 'root'
})
export class MasterService {
  // apiUrl:string = 'https://projectapi.gerasim.in/api/BusBooking/';

  constructor(private http:HttpClient) { }
  getAll(){
    return this.http.get<Employee[]>('http://localhost:3000/employee');
  }
  // Bus booking 
  // onRegisterUser(obj:any){
  //   return this.http.post<any[]>(this.apiUrl + "AddNewUser",obj)
  // }
  // getLocations():Observable<any[]>{
  //   return this.http.get<any[]>(this.apiUrl + 'GetBusLocations')
  // }
  // searchBus(from:number,to:number,travelDate:string):Observable<any[]>{
  //   return this.http.get<any[]>(`${this.apiUrl}searchBus?fromLocation=${from}&toLocation=${to}&travelDate=${travelDate}`)
getLocations(): Observable<any[]> {
  return of([
    { locationId: 1, locationName: 'Mumbai' },
    { locationId: 2, locationName: 'Pune' },
    { locationId: 3, locationName: 'Satara' },
    { locationId: 4, locationName: 'Kolhapur' },
    { locationId: 5, locationName: 'Goa' }
  ]);
}
private searchedBuses: Bus[] = [];
searchBus(
  from: number,
  to: number,
  travelDate: string
): Observable<Bus[]> {

  this.searchedBuses = [
    {
      busId: 101,
      busName: 'Neeta Volvo AC Sleeper',
      fromLocation: from,
      toLocation: to,
      travelDate: travelDate,
      departureTime: '08:30',
      arrivalTime: '16:45',
      fare: 1200,
      seatsAvailable: 12,
      rating:4.5
    },
    {
      busId: 102,
      busName: ' Neeta Non AC Sleeper',
      fromLocation: from,
      toLocation: to,
      travelDate: travelDate,
      departureTime: '22:00',
      arrivalTime: '06:30',
      fare: 900,
      seatsAvailable: 5,
      rating:4.1
    },
    {
      busId: 103,
      busName: 'Konduskar Volvo AC Seater',
      fromLocation: from,
      toLocation: to,
      travelDate: travelDate,
      departureTime: '08:30',
      arrivalTime: '16:45',
      fare: 1200,
      seatsAvailable: 12,
      rating:4.5
    },
    {
      busId: 104,
      busName: 'Konduskar Volvo AC Sleeper',
      fromLocation: from,
      toLocation: to,
      travelDate: travelDate,
      departureTime: '22:00',
      arrivalTime: '16:45',
      fare: 1500,
      seatsAvailable: 2,
      rating:4.9
    },
    {
      busId: 105,
      busName: 'Vaibhav AC Seater',
      fromLocation: from,
      toLocation: to,
      travelDate: travelDate,
      departureTime: '21:30',
      arrivalTime: '16:45',
      fare: 900,
      seatsAvailable: 12,
      rating:4.2
    },
     {
      busId: 106,
      busName: 'Vaibhav AC Sleeper',
      fromLocation: from,
      toLocation: to,
      travelDate: travelDate,
      departureTime: '22:30',
      arrivalTime: '16:45',
      fare: 1000,
      seatsAvailable: 10,
      rating:4.5
    },
  ];
   return of(this.searchedBuses);
}
  getSearchedBuses(): Bus[] {
    return this.searchedBuses;
  }
}


