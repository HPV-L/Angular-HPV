import { Component } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { IProduct } from 'src/app/interfaces/product';
import { ICategory } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/services/category.service';
import { CartService } from 'src/app/services/cart.service';
@Component({
  selector: 'app-product-shop',
  templateUrl: './product-shop.component.html',
  styleUrls: ['./product-shop.component.scss']
})
export class ProductShopComponent {
  listProduct: IProduct[] = [];
  listCategory: ICategory[] = [];
constructor (
  private productService: ProductService,
  private categoryService: CategoryService,
  private CartService: CartService
  ){
  this.productService.getAllProducts().subscribe((data:any) =>{
    console.log(data)
    
    this.listProduct = data


  })
}

carts :any[] = this.CartService.getCart();

onAddCart(product: IProduct){
 
  let index = this.carts.findIndex((item) =>{
    return item.id == product.id
  })
  if(index>=0){
    this.carts[index].quantity += 1
  }else{
    let cartItem:any ={
      id:product.id,
      name:product.name,
      img:product.thumbnail,
      price:product.price,
      quantity:1,
    }
    this.carts.push(cartItem)

   }
  //  console.log(this.carts[0].subtotal());
  // let addCartJson = JSON.stringify(this.carts)
  // sessionStorage.setItem('cart', addCartJson)
  this.CartService.saveCart(this.carts)
  alert("thêm vào giỏ hàng thành công")
  }


}
