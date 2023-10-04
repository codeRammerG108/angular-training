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
  @Input() buttonText: string = "Add to Cart";
  @Input() currentProduct: string = "0";

  temp: number = 0;
  flag: boolean = false;
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
    
    for( this.temp = 0; this.temp < 30; this.temp++){
      if(this.cart.cartPresent[this.temp] == this.productId){
        this.flag = true
      }
    }

    // this.cart.addToCart();
    // this.buttonText = "Added to cart";
    // this.cart.cartPresent.push(this.productId);
    // console.log(this.flag);
    // console.log(this.cart.cartPresent);
    

    if(this.productQuan == 0) {
      console.log("Add the item for product : ", this.productName);
    }
    else {
      if(this.flag) {  
        console.log("Already Present");
        this.buttonText = "Already added to cart";
        return 
      }
      else {
        this.cart.addToCart();
        this.buttonText = "Added to cart";
        this.cart.cartPresent.push(this.productId);
        console.log("Product Added to Cart")
      }
    }

    
  }

}
