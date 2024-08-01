import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  private baseURL: string = 'https://fakestoreapi.com/products';
  private _http = inject(HttpClient);

  getProducts():Observable<any>{
    return this._http.get(this.baseURL)
  }

  getProductById(id: number):Observable<any>{
    return this._http.get(`${this.baseURL}/${id}`)
  }
}
