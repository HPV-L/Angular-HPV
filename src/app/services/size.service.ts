import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ISize } from '../interfaces/size';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

    constructor(private http: HttpClient) { }
  getAllSize():Observable<ISize[]>{
    return this.http.get<ISize[]>(`http://localhost:8080/api/size`)
  }
}
