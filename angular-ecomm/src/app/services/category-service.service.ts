import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {ResponseCategory} from '../models/category.model';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http: HttpClient) { }

  getCategories(): Observable<ResponseCategory[]> {
    return this.http.get<ResponseCategory[]>('https://localhost:7060/api/Category')
  }


}
