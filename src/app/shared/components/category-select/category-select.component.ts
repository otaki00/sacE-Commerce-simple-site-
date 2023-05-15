import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-category-select',
  templateUrl: './category-select.component.html',
  styleUrls: ['./category-select.component.css']
})
export class CategorySelectComponent {

  @Input() title:string =""
  @Input() categories:any[] = []
  @Output() selectedOption = new EventEmitter()

  getFiltteredData( event:Event) {
    this.selectedOption.emit(event)
  }

}
