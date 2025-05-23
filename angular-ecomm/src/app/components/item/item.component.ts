import {Component, input, Input} from '@angular/core';
import {Product} from '../../models/product.model';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  product = input<Product>();
}
