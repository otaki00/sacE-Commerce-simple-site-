import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environments } from 'src/app/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }

  getAllProducts( ) {
    return this.http.get(environments.baseApi+ 'products')
  }

  getAllcategories() {
    return this.http.get(environments.baseApi+ 'products/categories')
  }

  getAllProductsBasedOnCategory(category:string) {
    return this.http.get(`${environments.baseApi}products/category/${category}`)
  }

  getProductById(id:any){
    return this.http.get(`${environments.baseApi}products/${id}`)
  }
}
