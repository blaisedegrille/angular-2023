import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public get(): Observable<User[]> {
    const url = environment.apiUrl + `/user`;
    return this.http.get<User[]>(url);
  }

  public getDefaultData(): Observable<User[]> {
    return of(this.tmp);
  }

  private tmp: User[] = [
    {
      id: 1,
      name: 'Test User 1',
      email: 'test1@email.com',
    },
    {
      id: 2,
      name: 'Test User 2',
      email: 'test2@email.com',
    },
    {
      id: 3,
      name: 'Test User 3',
      email: 'test3@email.com',
    },
    {
      id: 4,
      name: 'Test User 4',
      email: 'test4@email.com',
    },
    {
      id: 5,
      name: 'Test User 5',
      email: 'test5@email.com',
    },
  ];
}
