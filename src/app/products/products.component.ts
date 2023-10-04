import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent {

  products: any = [];

  constructor(private productService: ProductsService) { 
 
    this.productService.getProducts().subscribe((data) => {
      this.products = data.products;
      console.log("From Products Componenet" , this.products);
    })
   }

}
