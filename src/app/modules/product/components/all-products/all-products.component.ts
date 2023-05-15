import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  products:any[] = []
  categories:any[] = []
  errorInApiCall:boolean = false
  isLoading:boolean = true


  constructor(private service:ProductsService) {
  }

  ngOnInit(): void {
      this.getProducts()
      this.getCategories()
  }

  getProducts() {
    this.service.getAllProducts().subscribe((result:any) => {
      // console.log(result);
      this.products = result
      this.isLoading = false
      // console.log(this.products);
    }, (error:any) => {
      // alert(error.status)
      this.isLoading = false
      this.errorInApiCall = true
    } )
  }

  getCategories() {
    this.service.getAllcategories().subscribe((result:any) => {
      // console.log(result);
      this.categories = result
      // console.log(this.categories);
      // this.isLoading = false
    }, (error:any) => {
      // alert(error.status)
      // this.isLoading = false
      this.errorInApiCall = true
    } )
  }

  getFiltteredData(event:any) {
    let category = event.target.value
    console.log(category);
    (category == "all") ? this.getProducts() : (
      this.service.getAllProductsBasedOnCategory(category).subscribe((result:any) => {
        this.products = result
        this.isLoading = false
      } , (error:any) => {
        this.isLoading = false
        this.errorInApiCall = true
      })
    )
  }


  
}
