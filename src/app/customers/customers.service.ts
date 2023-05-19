import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CustomersInterface } from './customers.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CustomersService {
  constructor(private http: HttpClient){}
  getUsers(): Observable<CustomersInterface[]>{
    return this.http.get<CustomersInterface[]>('http://localhost:3034/users');
  }
}
