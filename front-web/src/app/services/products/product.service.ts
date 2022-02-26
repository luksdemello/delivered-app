import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { IProduct } from 'src/app/models/product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private url: string = 'http://localhost:3000'

  constructor(
    private http: HttpClient
  ) { }

  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.url + '/products');
  }
}
