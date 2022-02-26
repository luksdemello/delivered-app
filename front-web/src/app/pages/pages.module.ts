import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';



@NgModule({
  declarations: [
    OrdersComponent,
    HomeComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrdersComponent,
    HomeComponent
  ]
})
export class PagesModule { }
