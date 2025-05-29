import {Base} from './base.model';

export interface ResponseCategory extends Base {
  Name: string;
  Description: string;
  SubCategories: ResponseSubCategory[];
}

export interface ResponseSubCategory extends Base {
  CategoryId: number;
  Name: string;
  Description: string;
}
