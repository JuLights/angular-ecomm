import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http : HttpClient ) { }

  /**
   * Sends a GET request to the sign-in endpoint with username and password as query parameters.
   * @param username - The username of the user.
   * @param password - The password of the user.
   * @returns An Observable that emits an object containing the token and refreshToken.
   */
  signInGet(username: string, password: string): Observable<{ token:string, refreshToken: string }> {
    let token = this.http.get<{ token:string, refreshToken: string }>(`https://localhost:7000/api/Auth/signin`, {
      params: {
        username: username,
        password: password
      }
    });

    return token;
  }

  // signUp(username: string, email: string, ): Observable<string>{
  //
  // }


}
