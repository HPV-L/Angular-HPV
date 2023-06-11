import { Component } from '@angular/core';
import { IOrder } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-canceled-order',
  templateUrl: './canceled-order.component.html',
  styleUrls: ['./canceled-order.component.scss']
})
export class CanceledOrderComponent {
  listOrder:any =[];
  constructor (private orderService:OrderService){
    this.orderService.getOrderCanceled().subscribe( data =>{
      this.listOrder = data
   })
  }
  muaLai(id:string){
    const confirm = window.confirm('Are you sure you want to repurchase this order?')
    if( confirm) {
      this.orderService.reBuyOrderCanceled(id).subscribe(data => {
        this.listOrder = this.listOrder.filter((item:any) => item._id !== id)
      })
    }
  }
}
