import { Component } from '@angular/core';
import { ProductsService } from 'src/app/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  productImage: string = "";
  productName: string = "Product_Name";
  productPrice: number = 999;
  productDescription: string = "Product_Name is gerat product to consider";
  productQuantity: Number = 0;
  buttonText: string = "Add to Cart"
  products:any;

  constructor(private productService: ProductsService) {  
    this.productService.getProducts().subscribe((data: any) => {
      this.products = data;
    })
   }

}
