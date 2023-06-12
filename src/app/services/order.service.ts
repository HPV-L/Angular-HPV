import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { IOrder } from '../interfaces/order';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
    addOrder(orders :IOrder):Observable<IOrder>{
      return this.http.post<IOrder>(`http://localhost:8080/api/order`,orders)
    }
    getAllOrder():Observable<IOrder[]>{
      return this.http.get<IOrder[]>(`http://localhost:8080/api/order`)
    }
    getOrderByIdUser(id :string):Observable<IOrder>{
      return this.http.get<IOrder>(`http://localhost:8080/api/order/user/${id}`)
    }
    getOrderById(id :string):Observable<IOrder>{
      return this.http.get<IOrder>(`http://localhost:8080/api/order/${id}`)
    }
    editOrder(order:IOrder):Observable<IOrder>{
      const token = this.authService.getToken();
  
      // Tạo headers và thêm token vào headers
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.patch<IOrder>((`http://localhost:8080/api/order/`)+ `${order._id}`, order, { headers })
    }
}
