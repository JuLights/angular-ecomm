export interface ResponseCategory {
  i : number;
  Name: string;
  Description: string;
  SubCategories: ResponseSubCategory[];
}

export interface ResponseSubCategory {
  CategoryId: number;
  Name: string;
  Description: string;
}
