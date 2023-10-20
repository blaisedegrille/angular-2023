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
      name: 'User 1',
      email: 'test1@email.com',
    },
    {
      id: 2,
      name: 'User 2',
      email: 'test2@email.com',
    },
    {
      id: 3,
      name: 'User 3',
      email: 'test3@1email.com',
    },
    {
      id: 4,
      name: 'User 4',
      email: 'test4@1email.com',
    },
    {
      id: 5,
      name: 'User 5',
      email: 'test5@email.com',
    },
    {
      id: 6,
      name: ' User 1_2',
      email: 'test1@email2.com',
    },
    {
      id: 7,
      name: ' User 2_2',
      email: 'test2@email2.com',
    },
    {
      id: 8,
      name: ' User 3_2',
      email: 'test3@email3.com',
    },
    {
      id: 9,
      name: ' User 4_2',
      email: 'test4@email3.com',
    },
    {
      id: 10,
      name: ' User 5_2',
      email: 'test5@1email.com',
    },
  ];
}
