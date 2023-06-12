import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISize } from '../interfaces/size';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

    constructor(
    private http: HttpClient,
    private authService: AuthService
    ) { }
  getAllSize():Observable<ISize[]>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ISize[]>(`http://localhost:8080/api/size`,{headers})
  }

  addSize(size:ISize):Observable<ISize>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.post<ISize>(`http://localhost:8080/api/size`,size,{headers})
  }

  editSize(size:ISize):Observable<ISize>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.patch<ISize>(`http://localhost:8080/api/size/${size._id}`,size,{headers})
  }

  removeSize(id:number):Observable<ISize>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.delete<ISize>(`http://localhost:8080/api/size/${id}`,{headers})
  }

  getSize(id:number | string):Observable<ISize>{
    const token = this.authService.getToken();
    const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
    return this.http.get<ISize>(`http://localhost:8080/api/size/${id}`,{headers})
  }
}
