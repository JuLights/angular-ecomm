import {Component, input, Input} from '@angular/core';
import {Product} from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-item',
  imports: [],
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent {
  product = input<Product>();

  constructor(private router: Router) {}

  goToProductDetails(){
    this.router.navigate(['/productDetails', this.product()?.id])
  }

}
