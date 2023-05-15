import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { ProductsService } from '../../services/products.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  itemCount:number = 1
  itemId:any
  data:any = {}
  loading:boolean = false
  cartItems:any[] = []


  constructor(private route: ActivatedRoute, private service:ProductsService){
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.itemId = +this.route.snapshot.params['id']
    // console.log(this.itemId);
    this.getProduct()
  }

  addItemCount() {
    this.itemCount++
  }

  subItemCount() {
    if(this.itemCount >1){
      this.itemCount--
    }
  }

  getProduct() {
    this.loading= true
    this.service.getProductById(this.itemId).subscribe((result:any) => {
      this.data = result
      // console.log(this.data);
      this.loading=false
    } , error => {
      Swal.fire({
        icon: 'error',
        title: 'Opss... !',
        text: error,
      })
      
    } )
  }

  addToCart(event:any){
    if("cartInfo" in localStorage) {
      this.cartItems = JSON.parse(localStorage.getItem("cartInfo")!)
      let checkItem = this.cartItems.find((item:any) => item.cartItem.id == this.data.id)
      if(checkItem) {
        Swal.fire(`This item is already in cart`)
      }else {
        let item = {cartItem:this.data, quantity:this.itemCount }
        console.log(item);
        
        this.cartItems.push(item)
        localStorage.setItem("cartInfo", JSON.stringify(this.cartItems))
        Swal.fire({
          icon: 'success',
          title: 'Nice !',
          text: `item ${this.data.title} added to the cart`,
        })
      }
    }else {
      let item = {cartItem:this.data, quantity:this.itemCount }
      this.cartItems.push(item)
      localStorage.setItem("cartInfo", JSON.stringify(this.cartItems))
    }
  }
}

