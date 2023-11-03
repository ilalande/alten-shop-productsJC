import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProductList(): Observable<{ data: Product[] }> {
    return this.http.get<{ data: Product[] }>('assets/products.json');
  }
}
