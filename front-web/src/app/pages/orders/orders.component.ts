import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products/product.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit {

  products: Product[] = [];

  constructor(
    private productsService: ProductService
  ) {
    this.getProducts();
  }

  ngOnInit(): void {
  }

  getProducts(): void {
    this.productsService.getProducts().subscribe(result => {
      this.products = result;
      console.log(this.products)
    })
  }

}
