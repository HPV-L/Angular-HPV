import { StatusService } from './../../../../services/status.service';
import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { Table } from 'primeng/table';
import { IOrder } from 'src/app/interfaces/order';
import { IStatus } from 'src/app/interfaces/status';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.scss'],
  providers: [MessageService]
})
export class OrderListComponent implements OnInit{
    orderListId: IOrder[] = [];
    
    orders: IOrder[] = [];

    status: IStatus[] = []

    cols: any[] = [];

    rowsPerPageOptions = [5, 10, 20]; 

    constructor(private orderService: OrderService,
      private messageService: MessageService,
      private StatusService: StatusService
      ){}
    ngOnInit(): void {
      this.orderService.getAllOrder().subscribe(data => this.orders = data)

      this.StatusService.getAllStatus().subscribe(data => this.status = data)
    }
      
    onGlobalFilter(table: Table, event: Event) {
      table.filterGlobal((event.target as HTMLInputElement).value, 'contains');
  }
}
