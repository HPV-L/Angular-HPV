import { Component } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { CartService } from 'src/app/services/cart.service';
import { OrderService } from 'src/app/services/order.service';
import { Router } from '@angular/router';
import { DateTime } from 'luxon';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IOrder } from 'src/app/interfaces/order';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent {
  buy: boolean = false;
  carts:any =[]
  totalQuantity:number = this.CartService.getCartQuatity()
  totalPrice:number = this.CartService.getCartPrice()
  idUser:number = this.AuthService.getID()
  currentDateTime: string;
  role:number | string = this.AuthService.getRole()

  productForm = this.formBuilder.group({
    name:["",[Validators.required]],
    city:["",[Validators.required]],
    address:["",[Validators.required]],
    phone:["",[Validators.required]],
    notes:["",[Validators.required]]
  })

  constructor(
    private CartService: CartService,
    private OrderService: OrderService,
    private Route : Router,
    private AuthService : AuthService,
    private formBuilder : FormBuilder,
  ){
    const vietnamTimeZone = 'Asia/Ho_Chi_Minh';
    const now = DateTime.now().setZone(vietnamTimeZone);
    this.currentDateTime = now.toFormat('yyyy-MM-dd HH:mm:ss');

    this.carts= this.CartService.getCart()
  }

  subtotal(cart:any) {
    return cart.quantity * cart.price
  }


  // buy
  buyNow(){
    const confirm = window.confirm("Bạn có chắc muốn mua hàng")
    if(confirm){
      if(this.role == 0){
        const listOder : IOrder = {
          name: this.productForm.value.name || "",
          idUser: this.idUser,
          idProduct: this.carts,
          city: this.productForm.value.city || "",
          address: this.productForm.value.address || "",
          quantyti: this.totalQuantity,
          total: this.totalPrice,
          days:this.currentDateTime,
          notes:this.productForm.value.notes || "",
          status: 1
        }
       this.OrderService.addOrder(listOder).subscribe( () =>{
        sessionStorage.clear()
        this.carts=[]
        // this.Route.navigate(["/detailorder"])
       })
      } else if (this.role == "admin"){
        alert('bạn là amdin ko đc mua hàng')
      } else{
        alert('bạn cần đăng nhập')
      }
     
    }
    
  }
  
}
