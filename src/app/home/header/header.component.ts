import { Component } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  cartValue: Number = 0;
  
  constructor(private cart: CartService) {
  }

  ngOnInit() {
    this.cart.cartNumber$.subscribe((cartNumber) => {
      this.cartValue = cartNumber;
    });
  }

}
