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
      name: 'Farkas András',
      email: 'Legnagyobb király',
    },
    {
      id: 2,
      name: 'Horváth Gáspár Kristóf',
      email: 'Legnagyobb király',
    },
    {
      id: 3,
      name: 'Halász Roland',
      email: 'Legnagyobb király',
    },
    {
      id: 4,
      name: 'Csörge Attila',
      email: 'Legnagyobb király',
    },
    {
      id: 5,
      name: 'Prisztács Attila',
      email: 'Legnagyobb király',
    },
  ];
}
