import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/products.service';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})



export class ProductComponent {
  @Input() productId: string = "";
  @Input() productImage: string = "";
  @Input() productName: string = "Product_Name";
  @Input() productPrice: string = "999";
  @Input() productDescription: string = "Product_Name is gerat product to consider";
  @Input() productQuantity: string = "0";
  @Input() productStock: string = "0";
  @Input() buttonText: string = "Add to Cart"
  cartvalue: number = 0;
  clicked:boolean = false;
  products:any = [];

  productQuan: number = +this.productQuantity;

  constructor(private productService: ProductsService, private cart: CartService) {  
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      console.log("From Componenet" , this.products);
    })
   }

   minus() {
    if(this.productQuan === 0) {
        console.log("No Product added");
    }
    else {
      this.productQuan--;
    }
   }

   plus() {
    this.productQuan++;
    console.log("Plus presseed")
   }

   addToCart() {
    this.cart.addToCart();
    this.buttonText = "Added to cart";
  }

}
