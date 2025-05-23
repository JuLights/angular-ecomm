import {Component, signal} from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-pre-header',
  imports: [
    NgIf
  ],
  templateUrl: './pre-header.component.html',
  styleUrls: ['./pre-header.component.css'],
})
export class PreHeaderComponent {
  isHidden = signal<boolean>(false);

  closePreHeader() {
    this.isHidden.set(true);
  }
}
