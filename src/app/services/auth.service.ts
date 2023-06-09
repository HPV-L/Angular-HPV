
import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/user';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }
 // đăng nhập đăng kí
 signin(user :IUser):Observable<IUser[]>{
  return this.http.post<IUser[]>(`http://localhost:3000/login`,user)
}
signup(user: IUser): Observable<IUser[]> {
  return this.http.post<IUser[]>(`http://localhost:3000/register`,user)
}
// actions user
getAllUsers(): Observable<IUser[]>{
  return this.http.get<IUser[]>(`http://localhost:3000/users`)
}
removetUsers(id:number): Observable<IUser[]>{
  return this.http.delete<IUser[]>(`http://localhost:3000/users/${id}`)
}
editUser(user:IUser):Observable<IUser>{
  return this.http.patch<IUser>(`http://localhost:users${user.id}`,user)
}


saveRole( carts:any){
  let roleJson = JSON.stringify(carts)
  // sessionStorage.setItem('cart',cartJson)
  localStorage.setItem('user', roleJson);
}

getRole() :any{
  const data = JSON.parse(localStorage?.getItem('user') as string)
  if(data){
   const role = data.user.role 
   return role
  } else{
    return null
  }
}

getID(){
  const data = JSON.parse(localStorage?.getItem('user') as string)
  if(data){
    const id = data.user.id
    return id
  }else{
    return null
  }   
}
}
