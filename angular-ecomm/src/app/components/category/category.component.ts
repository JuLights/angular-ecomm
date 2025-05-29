import {Component, input, signal} from '@angular/core';
import {ResponseCategory} from '../../models/category.model';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-category',
  imports: [
    NgIf
  ],
  templateUrl: './category.component.html',
  styleUrls: ['category.component.css']
})



export class CategoryComponent {
  category = input<ResponseCategory>();

  isCategoryOpen= signal<boolean>(false);

  toggleSubcategories() {
    if(this.isCategoryOpen()){
      this.isCategoryOpen.set(false);
    }else {
      this.isCategoryOpen.set(true);
    }
  }
}
