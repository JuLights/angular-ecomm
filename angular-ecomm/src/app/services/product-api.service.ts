import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Product} from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductApiService {

  constructor(private http: HttpClient) {}

  private readonly baseUrl = `https://localhost:7060/api/Products`;

  getProducts(page: number, amount: number) : Observable<Product[]> {

    const url = `${this.baseUrl}/${page}/${amount}`;
    let headers = new HttpHeaders().set('Content-Type', 'application/json');

    return this.http.get<Product[]>(url, { headers: headers });
  }
}
