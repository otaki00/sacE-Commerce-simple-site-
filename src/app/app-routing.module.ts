import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllProductsComponent } from './modules/product/components/all-products/all-products.component';
import { ProductDetailsComponent } from './modules/product/components/product-details/product-details.component';
import { CartComponent } from './modules/carts/components/cart/cart.component';

const routes: Routes = [
  {path:"products",component: AllProductsComponent},
  {path:"details/:id", component: ProductDetailsComponent},
  {path: "cart", component: CartComponent},
  {path:"**", redirectTo:"products", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
