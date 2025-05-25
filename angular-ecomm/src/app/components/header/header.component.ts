import { Component } from '@angular/core';
import {Router} from '@angular/router';
import {NgIf} from '@angular/common';
import {LoginComponent} from '../login/login.component';


@Component({
  selector: 'app-header',
  imports: [
    NgIf,
    LoginComponent
  ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {

  constructor(private router: Router) {}

  openLogin() {
    // Handle login modal open
    console.log('Login clicked');

    this.router.navigate(['/login']);
  }

  openSignUp() {
    // Handle sign-up modal open
    console.log('Sign Up clicked');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('ecommToken');
  }

  logOut() {
    localStorage.removeItem('ecommToken');
    localStorage.removeItem('ecommRefreshToken');
    console.log('Logged out successfully');
    this.router.navigate(['/']);
  }

  protected readonly localStorage = localStorage;
}
