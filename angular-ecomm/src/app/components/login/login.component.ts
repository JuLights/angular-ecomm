import {Component, inject, Input, input, signal} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthServiceService} from '../../services/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})



export class LoginComponent {

  constructor(private router: Router) {
  }

  isLoggedIn = signal<boolean>(false);

  authService = inject(AuthServiceService);

  onSubmit(form: any){
    const username = form.value.username;
    const password = form.value.password;

    // this.authService.signIn(username, password).subscribe(
    //   (token) => {
    //     console.log('Token:', token.token);
    //
    //     localStorage.setItem('ecommToken', token.token);
    //   }
    // )

    this.authService.signInGet(username, password).subscribe(
      (response) => {
        console.log('Response:', response.token);
        console.log('Response:', response.refreshToken);
        localStorage.setItem('ecommToken', response.token);
        localStorage.setItem('ecommRefreshToken', response.refreshToken);
        this.isLoggedIn.set(true);

        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Error during sign-in:', error);
      }
    )

    console.log('Form submitted with:', { username, password });
  }

}
