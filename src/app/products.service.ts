import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: any;
  constructor(private http: HttpClient) {}

  getProducts(): Observable<any> {
    this.products = this.http.get('https://dummyjson.com/docs/products');
    console.log("passed", this.products);
    return this.products;
  }
}
