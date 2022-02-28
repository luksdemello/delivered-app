import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products/product.service';
import * as leaflet from 'leaflet';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';
import { Orders } from 'src/app/models/orders';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, AfterViewInit, OnDestroy {

  private map: any;
  search = faSearch;
  position: any = {
    lat: -23.6821604,
    lng: -46.8754824
  }
  inputValue: string = '';
  label: string = 'São Paulo - SP'
  places: any[] = []
  subscription: Subscription = new Subscription();
  products: Product[] = [];
  selectedProducts: Product[] = [];


  constructor(
    private productsService: ProductService,
    private toastr: ToastrService
  ) {
    this.getProducts();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    if (this.map) {
      this.map.off();
      this.map.remove();
    }

    this.map = leaflet.map('map', {
      center: this.position,
      zoom: 15,

    });


    const tiles = leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      minZoom: 3,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    });

    const marker = leaflet.marker(this.position);
    marker.bindPopup(this.label);

    leaflet.control.attribution()

    tiles.addTo(this.map);
    marker.addTo(this.map);
  }

  getProducts(): void {
    this.subscription.add(this.productsService.getProducts().subscribe(result => {
      this.products = result;
    }))
  }



  applyFilter(event: any) {
    this.subscription.add(this.productsService.getlocals(event.target.value).subscribe((result: any) => {
      this.places = result.features.map((item: any) => {
        return {
          name: item.place_name,
          coordinates: {
            lat: item.center[1],
            lng: item.center[0]
          }
        }
      })
    }))
  }

  selectPlace(place: any): void {
    console.log(place)
    this.inputValue = place.name;
    this.label = place.name;
    this.position = place.coordinates;
    this.places = [];
    this.initMap();
  }

  onSelectProduct(product: Product): void {
    const isAlreadySelected = this.selectedProducts.some(item => item.id === product.id);

    if (isAlreadySelected) {
      const selecteds = this.selectedProducts.filter(item => item.id !== product.id)
      this.selectedProducts = selecteds;
    } else {
      this.selectedProducts.push(product);
    }
  }

  isSelected(product: Product): boolean {
    const selected = this.selectedProducts.find(item => item.id === product.id);

    if (selected) {
      return true;
    } else {
      return false;
    }
  }

  getTotal(): number {
    return this.selectedProducts.reduce((curr, acc) => {
      return curr + acc.price
    }, 0)
  }

  onSubmit(): void {
    const orders: Orders = {
      latitude: this.position.lat,
      longitude: this.position.lng,
      address: this.label,
      products: this.selectedProducts.map(({ id }) => ({ id }))
    }

    this.subscription.add(this.productsService.saveOrder(orders).subscribe((result) => {
      this.toastr.success(`Pedido enviado com sucesso! Nº ${result.id}`, '', { progressBar: true, timeOut: 3000 })
    },
      (error) => {
        this.toastr.error('Erro ao efetuar Pedido', '', { progressBar: true, timeOut: 3000 })
      }
    ))

  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
