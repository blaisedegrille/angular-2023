import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private http: HttpClient) {}

  public getUser(): Observable<User[]> {
    const url = environment.apiUrl + `/posts`;
    return this.http.get<User[]>(url);
  }

  // fetch('')
  // .then((response) => response.json())
  // .then((json) => console.log(json));
}
