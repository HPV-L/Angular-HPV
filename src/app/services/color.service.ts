import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IColor } from '../interfaces/color';

@Injectable({
  providedIn: 'root'
})
export class ColorService {

  constructor(
    private http: HttpClient
  ) { }
  getAllColor():Observable<IColor[]>{
    return this.http.get<IColor[]>(`http://localhost:8080/api/color`)
  }
}
