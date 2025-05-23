import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PreHeaderComponent} from './components/pre-header/pre-header.component';
import {HeaderComponent} from './components/header/header.component';
import {FooterComponent} from './components/footer/footer.component';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PreHeaderComponent, HeaderComponent, FooterComponent],
  template: `
    <app-pre-header />
    <app-header />
    <router-outlet />
    <app-footer/>
  `,
  styles: [],
})
export class AppComponent {
  title = 'angular-ecomm';
}
