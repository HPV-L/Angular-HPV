import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IOrder } from '../interfaces/order';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient
  ) { }
    addOrder(orders :IOrder):Observable<IOrder>{
      return this.http.post<IOrder>(`http://localhost:8080/api/order`,orders)
    }
    getAllOrder():Observable<IOrder[]>{
      return this.http.get<IOrder[]>(`http://localhost:8080/api/order`)
    }
    removeOrder(id :string):Observable<IOrder>{
      return this.http.delete<IOrder>(`http://localhost:8080/api/order/${id}`)
    }
    getOrderById(id :string):Observable<IOrder>{
      return this.http.get<IOrder>(`http://localhost:8080/api/order/user/${id}`)
    }
    getOrderCanceled():Observable<IOrder[]>{
      return this.http.get<IOrder[]>('http://localhost:8080/api/order/canceled')
    }
    reBuyOrderCanceled(id:string):Observable<IOrder>{
      return this.http.patch<IOrder>(`http://localhost:8080/api/order/restore/${id}`, null)
    }
}
