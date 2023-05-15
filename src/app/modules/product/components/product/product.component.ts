import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input() item:any = {}
  @Output() itemOut = new EventEmitter()

  giveItem() {
    this.itemOut.emit(this.item)
  }
}
