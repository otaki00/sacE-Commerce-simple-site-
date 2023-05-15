import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { ProductRowComponent } from './components/product-row/product-row.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CartComponent,
    ProductRowComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
  ],
})
export class CartsModule { }
