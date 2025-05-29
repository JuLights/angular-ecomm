import {Base} from './base.model';

export interface Product extends Base{
  subCategoryId: number;
  name: string;
  description: string;
  overallQuantity: number;
  isDiscounted: boolean;
  discountPercentage: number;
  price: number;
  images: string[];
}
