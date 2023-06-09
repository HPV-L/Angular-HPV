import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICategory } from '../interfaces/category';
import { Observable } from 'rxjs';
import { IProduct } from '../interfaces/product';


@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(
    private http: HttpClient
  ) { }

    // add
  addCategory(category:ICategory):Observable<ICategory>{
    return this.http.post<ICategory>(`http://localhost:8080/api/categories`,category)
  }
  //  lấy 1
  getCategory(id:Number):Observable<ICategory>{
    return this.http.get<ICategory>(`http://localhost:8080/api/categories/${id}`)
  }
  // lấy tất cả
  getAllCategory():Observable<ICategory[]>{
    return this.http.get<ICategory[]>(`http://localhost:8080/api/categories`)
  }
  // sủa category
  editCategory(category:ICategory):Observable<ICategory>{
    return this.http.patch<ICategory>(`http://localhost:8080/api/categories`,category)
  }
  // xoa
  deleteCategory(id:any):Observable<ICategory>{
    return this.http.delete<ICategory>(`http://localhost:8080/api/categories/${id}`)
  }

  getProductsByCategoryId(id:number | undefined):Observable<IProduct[]>{
    const url = `http://localhost:3000/products?_expand=${id}`;
    return this.http.get<IProduct[]>(url)
  }

  deleteProduct(id :any): Observable<IProduct>{
    return this.http.delete<IProduct>(`http://localhost:3000/products/${id}`)
  }
}
