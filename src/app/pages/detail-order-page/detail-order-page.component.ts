import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-detail-order-page',
  templateUrl: './detail-order-page.component.html',
  styleUrls: ['./detail-order-page.component.scss']
})
export class DetailOrderPageComponent {
  detailOrder:any =[]
  idUser :number = this.AuthService.getID()
  constructor(
    private orderService: OrderService,
    private AuthService: AuthService
  ){
     this.orderService.getOrderById(this.idUser).subscribe( data =>{
        this.detailOrder = data
     })
  }

  huyDon():any{
      alert("ban muon huy don ?")
  }
}
