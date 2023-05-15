import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { CartsService } from '../../services/carts.service';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart:any[] = []
  totalAmount:number= 0

  orders:any[] = []

  orderSuccess:boolean = false

  constructor(private service:CartsService){}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getProductsFromLacolStorage()
    // this.sendCart()
  }

  getProductsFromLacolStorage() {
    if("cartInfo" in localStorage){
      this.cart = JSON.parse(localStorage.getItem("cartInfo")!) 
    }

    this.getTotalAmount()
  }

  addItemQuantity(index:number) {
    this.cart[index].quantity++
    this.totalAmount = 0
    this.getTotalAmount()
    localStorage.setItem("cartInfo", JSON.stringify(this.cart))
  }

  subItemQuantity(index:number){
    if(this.cart[index].quantity > 1 ){
      this.cart[index].quantity--
      this.totalAmount = 0
      this.getTotalAmount()
      localStorage.setItem("cartInfo", JSON.stringify(this.cart))
    }
  }

  setAmount() {
      localStorage.setItem("cartInfo", JSON.stringify(this.cart))
    }

  getTotalAmount() {
    let total:number = 0
    for(let i in this.cart){
      total += (this.cart[i].quantity * this.cart[i].cartItem.price)
    }
    this.totalAmount = +total.toFixed(3)
  }


  makeOrder() {
    if(this.cart.length > 0) {
      Swal.fire({
        title: 'Are you sure?',
        text: `Do you want to confirm this order with ${this.totalAmount}USD `,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, Confirm it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.sendCart()
          this.unsetCartInLocalstorage()
        }
      })
    }else {
      Swal.fire({
        icon: 'error',
        title: 'Wow !!',
        text: 'You need to add item first, dud',
      })
    }
    
  }

  unsetCartInLocalstorage() {

    this.cart = []
    this.totalAmount = 0
    localStorage.setItem("cartInfo", JSON.stringify([]))
  }

  deleteAllCart() {
    if(this.cart.length > 0) {
      Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.unsetCartInLocalstorage()
          Swal.fire(
            'Deleted!',
            'Your file has been deleted.',
            'success'
          )
        }
      })
    }
  }

  deleteSingleItem(index:number) {
    Swal.fire({
      title: 'Are you sure want to remove this item?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
        this.cart.splice(index, 1)
        this.setAmount()
        Swal.fire(
          'Deleted!',
          'Item has been deleted.',
          'success'
        )
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Your item is safe :)',
          'error'
        )
      }
    })
  }

  sendCart() {
    let finalProducts = this.cart.map(item => {
      return {productId: item.cartItem.id, quantity: item.quantity}
    })

    let APIModal = {
      userId: 5,
      date: new Date(),
      products: finalProducts
    }
    this.service.createNewCart(APIModal).subscribe(res => {
      this.orderSuccess = true
    })

    setTimeout(() =>this.orderSuccess = false ,4000)
    
  }
}
