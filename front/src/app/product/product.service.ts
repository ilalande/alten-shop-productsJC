import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Product } from './product.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiBaseUrl = 'http://localhost:5000';
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(`${this.apiBaseUrl}/products`);
  }

  deleteProduct(id: number): Observable<null> {
    return this.http.delete<null>(`${this.apiBaseUrl}/products/${id}`);
  }

  createProduct(product: Product) {
    console.log('in create product ' + product);
    return this.http.post<Product>(`${this.apiBaseUrl}/products`, product);
  }

  editProduct(updatedProduct: Product) {
    console.log('in edit product ' + updatedProduct);
    return this.http.put(
      `${this.apiBaseUrl}/products/${updatedProduct.id}`,
      updatedProduct
    );
  }
}
