import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http:HttpClient) { }
 
  getAllProducts():Observable<IProduct[]>{
    return this.http.get<IProduct[]>(`http://localhost:8080/api/products`)
  }
  getProductById(id: number):Observable<IProduct> {
    return this.http.get<IProduct>(`http://localhost:8080/api/products/${id}`)
  }
  addProduct(product: IProduct): Observable<IProduct>{
    return this.http.post<IProduct>(`http://localhost:8080/api/products`,product)
  }
  editProduct(product: IProduct): Observable<IProduct>{
    return this.http.patch<IProduct>(`http://localhost:8080/api/products/${product.id}`,product)
  }
  deleteProduct(id :any): Observable<IProduct>{
    return this.http.delete<IProduct>(`http://localhost:8080/api/products/${id}`)
  }
  getProductsByCategoryId(categoryId: number): Observable<IProduct[]> {
    const url = `http://localhost:8080/api/products?_expand=${categoryId}`;
    return this.http.get<IProduct[]>(url);
  }
}
