import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http : HttpClient ) { }

  signIn(username: string, password: string): Observable<string> {
    var token = this.http.post<string>('https://fakestoreapi.com/auth/login', {
      username: username,
      password: password
    })
    
    return token;
  }
}
