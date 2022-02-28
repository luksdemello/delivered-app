import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Orders } from 'src/app/models/orders';
import { IProduct } from 'src/app/models/product';
import { environment } from 'src/environments/environment';

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

  getlocals(local: string) {
    return this.http.get(`https://api.mapbox.com/geocoding/v5/mapbox.places/${local}.json?access_token=${environment.TOKEN_MAP}`);
  }

  saveOrder(payload: Orders): Observable<any> {
    return this.http.post(this.url + '/orders', payload)
  }
}
