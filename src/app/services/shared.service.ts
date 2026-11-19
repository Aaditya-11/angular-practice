import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MasterService } from '../service/master.service';
import { of } from 'rxjs';
import { Bus } from '../models/bus';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  apiUrl:string = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient,private masterService: MasterService) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/users');
  }
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/posts');
  }
  getBusById(busId: number): Observable<Bus | undefined> {
  return of(
    this.masterService.getSearchedBuses()
      .find(bus => bus.busId === busId)
  );
}

  jobData: any = {};
  familyData: any = {};

  setJobData(data: any) {
    this.jobData = data;
  }

  setFamilyData(data: any) {
    this.familyData = data;
  }

  getCombinedData() {
    return {
      job: this.jobData,
      family: this.familyData
    };
  }
  finalSave(data: any) {
  console.log("FINAL DATA SAVED:", data);

}
}