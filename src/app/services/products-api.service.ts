import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsApiService {

  private baseURL: string = 'https://fakestoreapi.com/products';
  private _http = inject(HttpClient);

  getProducts():Observable<IProduct[]>{
    return this._http.get<IProduct[]>(this.baseURL)
  }

  getProductById(id: number):Observable<IProduct>{
    return this._http.get<IProduct>(`${this.baseURL}/${id}`)
  }
}
