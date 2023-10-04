import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartNumberSubject = new BehaviorSubject<number>(0);
  cartNumber$ = this.cartNumberSubject.asObservable();

  temp: boolean = false; //will allow to run addtocart() function only if it allwoed from product.component.ts file
  cartPresent: any[] = []; //Storing cart products here

  constructor() { 
  }

  addToCart() {
    // You can implement your logic here to add a product to the cart.
    // For example, increment the cartNumber by 1 when a product is added.
    const currentCartValue = this.cartNumberSubject.value;
    this.cartNumberSubject.next(currentCartValue + 1);
  }
  
}
