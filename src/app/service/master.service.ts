import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../model/Employee';


@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  getAll(){
    return this.http.get<Employee[]>('http://localhost:3000/employee');
  }
}
