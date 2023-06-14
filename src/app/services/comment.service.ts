import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { IComment } from '../interfaces/comment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  constructor(
    private http: HttpClient,
    private authService: AuthService
  ) { }
    addcomment(comment :IComment):Observable<IComment>{
      return this.http.post<IComment>(`http://localhost:8080/api/comment`,comment)
    }
    getAllcomment():Observable<IComment[]>{
      return this.http.get<IComment[]>(`http://localhost:8080/api/comment`)
    }
    getcommentByIdProducts(id :string):Observable<IComment>{
      return this.http.get<IComment>(`http://localhost:8080/api/comment/${id}`)
    }
    getOneComment(id :string):Observable<IComment>{
      return this.http.get<IComment>(`http://localhost:8080/api/comment/${id}/detail`)
    }
    editcomment(comment:IComment):Observable<IComment>{
      return this.http.patch<IComment>((`http://localhost:8080/api/comment/`)+ `${comment._id}`, comment)
    }
    removeComment(id:number):Observable<IComment>{
      const token = this.authService.getToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.delete<IComment>(`http://localhost:8080/api/comment/${id}`,{headers})
    }
    forceComment(id:number):Observable<IComment>{
      const token = this.authService.getToken();
      const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
      return this.http.delete<IComment>(`http://localhost:8080/api/comment/${id}/force`,{headers})
    }
}
