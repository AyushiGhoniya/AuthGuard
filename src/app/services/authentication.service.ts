import { Injectable } from '@angular/core';
import { IUser } from '../modals/user.modal';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  private _url: string ="http://localhost:3000/posts?";

  constructor(private http: HttpClient) { }

  // userLoginDetails: IUser[] = [
  //   {
  //     id: 1,
  //     email: 'a',
  //     password: 'a'
  //   }
  // ]

  getUserDetails(): Observable<IUser[]> {
    return this.http.get<IUser[]>(this._url);
  }

  addUser(user): Observable<IUser> {
    return this.http.post<IUser>(this._url, {email: user.email, password: user.password});
  }

  getUserFromEmailAndPassword(email: string, password: string) {
    return this.http.get<IUser[]>(this._url + 'email=' + email + '&password' + password);
  }
}
