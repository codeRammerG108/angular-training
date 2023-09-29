import { Component } from '@angular/core';
import { ProductsService } from '../products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})

export class ProductsComponent {

  // productImage: string = "";
  // productName: string = "Product_Name";
  // productPrice: number = 999;
  // productDescription: string = "Product_Name is gerat product to consider";
  // productQuantity: Number = 0;
  // buttonText: string = "Add to Cart"
  products: any = [];

  constructor(private productService: ProductsService) { 
 
    this.productService.getProducts().subscribe((data) => {
      this.products = data.products;
      console.log("From Products Componenet" , this.products);
    })
   }

}
