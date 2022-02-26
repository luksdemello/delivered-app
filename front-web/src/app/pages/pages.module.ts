import { LOCALE_ID, NgModule } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { OrdersComponent } from './orders/orders.component';
import { HomeComponent } from './home/home.component';
import localePt from '@angular/common/locales/pt';

registerLocaleData(localePt);


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
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt-BR  '
    }
  ]
})
export class PagesModule { }
