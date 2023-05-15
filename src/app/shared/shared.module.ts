import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { RouterModule } from '@angular/router';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CategorySelectComponent } from './components/category-select/category-select.component';



@NgModule({
  declarations: [
    HeaderComponent,
    SpinnerComponent,
    CategorySelectComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    // HttpClientModule
    
  ],
  // we add export, because when import this module you need to use it's header
  exports: [HeaderComponent, SpinnerComponent, CategorySelectComponent],
})
export class SharedModule { }
