import {Component, inject, signal} from '@angular/core';
import {Product} from '../../models/product.model';
import {ItemComponent} from '../item/item.component';
import { NgIf} from '@angular/common';
import {ProductApiService} from '../../services/product-api.service';
// Assuming a Product model is used

@Component({
  selector: 'app-market',
  imports: [
    ItemComponent,
    NgIf
  ],
  templateUrl: 'market.component.html',
  styleUrls: ['market.component.css'],
})
export class MarketComponent {
  constructor() {

    this.productApiService.getProducts().subscribe((prods)=>{
      this.products.set(prods);
    });

  }

  productApiService = inject(ProductApiService);

  isMenuOpen = signal<boolean>(false);

  currentPage: number = 1;

  products = signal<Product[]>([]);

  categories = [
    { name: 'Electronics', open: false, subcategories: ['Phones', 'Laptops', 'Headphones'] },
    { name: 'Fashion', open: false, subcategories: ['Men', 'Women', 'Kids'] },
    { name: 'Home & Kitchen', open: false, subcategories: ['Furniture', 'Appliances', 'Decor'] },
  ];

  totalPages: number = 5; // Assume a total of 5 pages for pagination

  toggleMenuShow() {
    if(this.isMenuOpen()){
      this.isMenuOpen.set(false);
    }else {
      this.isMenuOpen.set(true);
    }
  }

  toggleSubcategories(category: { open: boolean; }) {
    category.open = !category.open;
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      // Update products for the current page
      // You can make an API call here to fetch products for the specific page
    }
  }
}
