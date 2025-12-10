import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  apiUrl:string = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) {}

  getUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/users');
  }
  getData(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl + '/posts');
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