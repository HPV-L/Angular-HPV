import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-content-detail-product',
  templateUrl: './content-detail-product.component.html',
  styleUrls: ['./content-detail-product.component.scss']
})
export class ContentDetailProductComponent {
  product?:IProduct
  quantitys?: number
  carts :any[] = this.CartService.getCart();

  

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private CartService:CartService,
  ) {
    this.route.paramMap.subscribe(param => {
      const id = String(param.get('slug'));
      this.productService.getProductBySlug(id).subscribe(product => {
        this.product = product;
        console.log(product);
        
      }, error => console.log(error.message))
    })
  }



  onAddCart(product: IProduct) :any {
 
    let index = this.carts.findIndex((item) =>{
      return item.id == product._id
    })
    if(index>=0){
      this.carts[index].quantity += 1
    }else{
      let cartItem:any ={
        id:product._id,
        name:product.name,
        img:product.thumbnail,
        price:product.price,
        quantity: this.quantitys || 1,
      }
      this.carts.push(cartItem)
  
     }

    this.CartService.saveCart(this.carts)
    alert("thêm vào giỏ hàng thành công")
    }

}
