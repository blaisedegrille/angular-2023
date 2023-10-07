import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { environment } from 'src/environments/environment';
import { UserJsonPlaceholder } from '../models/user-jsonplaceholder';

@Injectable({
  providedIn: 'root',
})
export class UserJsonPlaceholderService {
  constructor(private http: HttpClient) {}

  public getUser(): Observable<UserJsonPlaceholder[]> {
    const url = environment.jsonPlaceholderApiUrl + `/posts`;
    return this.http.get<UserJsonPlaceholder[]>(url);
  }

  // fetch('')
  // .then((response) => response.json())
  // .then((json) => console.log(json));
}
