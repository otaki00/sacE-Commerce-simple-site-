import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductsComponent } from './components/all-products/all-products.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { SharedModule } from "../../shared/shared.module";
import { ProductComponent } from './components/product/product.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from 'src/app/app-routing.module';
// import { BrowserModule } from '@angular/platform-browser';



@NgModule({
    declarations: [
        AllProductsComponent,
        ProductDetailsComponent,
        ProductComponent
    ],
    imports: [
        CommonModule
        // BrowserModule
        ,
        SharedModule,
        RouterModule,
        FormsModule,
    ]
})
export class ProductModule { }
