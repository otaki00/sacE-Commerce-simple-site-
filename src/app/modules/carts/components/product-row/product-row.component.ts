import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-row',
  templateUrl: './product-row.component.html',
  styleUrls: ['./product-row.component.css']
})
export class ProductRowComponent {

  @Input("item") item:{id:number,title:string, price:number, quantity:number, imageSrc:string } = {
    id: 0,
    title: '',
    price: 0,
    quantity: 0,
    imageSrc: ''
  }


  addItemQuantity() {
    this.item.quantity ++
  }

  subItemQuantity(){
    if(this.item.quantity > 1 ){
      this.item.quantity--
    }
  }
}
