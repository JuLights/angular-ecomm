import {Base} from './base.model';

export interface ResponseCategory extends Base {
  name: string;
  description: string;
  subCategories: ResponseSubCategory[];
}

export interface ResponseSubCategory extends Base {
  categoryId: number;
  name: string;
  description: string;
}
