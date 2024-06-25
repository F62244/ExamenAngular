import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
private urlApi = 'https://jsonplaceholder.typicode.com/users'

  constructor(private Http: HttpClient) { }

 obtenerDatos():Observable<any>{
  let url = this.urlApi;
  return this.Http.get<any>(url);
 }
}

