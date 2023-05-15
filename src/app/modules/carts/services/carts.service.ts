import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class CartsService {

  constructor(private http: HttpClient) { }

  createNewCart(modal:{userId:number,date:Date ,products:{}[]}) {
    return this.http.post(environments.baseApi+'carts', modal)
  }
}
