import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { UserInterface } from '../types/user.interface';

/**
 * A service for retrieving users data.
 */
@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {}

  /**
   * Retrieve a users
   */
  getUsers(): Observable<UserInterface[]> {
    return this.http.get<UserInterface[]>('https://jsonplaceholder.typicode.com/users').pipe(delay(2000));
  }
}
