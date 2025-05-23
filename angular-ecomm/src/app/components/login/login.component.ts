import {Component, inject} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthServiceService} from '../../services/auth-service.service';

@Component({
  selector: 'app-login',
  imports: [
    FormsModule
  ],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {

  authService = inject(AuthServiceService);

  onSubmit(form: any){
    const username = form.value.username;
    const password = form.value.password;

    this.authService.signIn(username, password).subscribe(
      (token) => {
        console.log('Token:', token);

        localStorage.setItem('ecommToken', token);
      }
    )

    console.log('Form submitted with:', { username, password });
  }
}
