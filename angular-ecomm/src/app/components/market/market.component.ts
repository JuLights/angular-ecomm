import {Component, signal} from '@angular/core';
import {Product} from '../../models/product.model';
import {ItemComponent} from '../item/item.component';
import {NgForOf, NgIf} from '@angular/common';
// Assuming a Product model is used

@Component({
  selector: 'app-market',
  imports: [
    ItemComponent,
    NgForOf,
    NgIf
  ],
  templateUrl: 'market.component.html',
  styleUrls: ['market.component.css'],
})
export class MarketComponent {
  isMenuOpen = signal<boolean>(false);

  currentPage: number = 1;


  products: Product[] = [
    {
      id: 1,
      title: 'Product 1',
      price: 100,
      category: 'Electronics',
      description: 'Description of Product 1',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      title: 'Product 2',
      price: 200,
      category: 'Fashion',
      description: 'Description of Product 2',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      title: 'Product 3',
      price: 300,
      category: 'Fashion',
      description: 'Description of Product 3',
      image: 'https://via.placeholder.com/150',
    }
  ]; // Array of product data

  categories = [
    { name: 'Electronics', open: false, subcategories: ['Phones', 'Laptops', 'Headphones'] },
    { name: 'Fashion', open: false, subcategories: ['Men', 'Women', 'Kids'] },
    { name: 'Home & Kitchen', open: false, subcategories: ['Furniture', 'Appliances', 'Decor'] },
  ];
  totalPages: number = 5; // Assume a total of 5 pages for pagination

  openMenu() {
    this.isMenuOpen.set(true);
  }

  closeMenu() {
    this.isMenuOpen.set(false);
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
