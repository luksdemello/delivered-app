import { AfterViewInit, Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/products/product.service';
import * as leaflet from 'leaflet';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.scss']
})
export class OrdersComponent implements OnInit, AfterViewInit {

  private map: any;
  search = faSearch;
  position: any = {
    lat: -22.853522085093804,
    lng: -47.22914238944137
  }
  inputValue: string = '';
  places: any[] = []

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
    marker.bindPopup(this.inputValue);

    leaflet.control.attribution()

    tiles.addTo(this.map);
    marker.addTo(this.map);
  }


  products: Product[] = [];

  constructor(
    private productsService: ProductService
  ) {
    this.getProducts();
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  getProducts(): void {
    this.productsService.getProducts().subscribe(result => {
      this.products = result;
    })
  }



  applyFilter(event: any) {
    this.productsService.getlocals(event.target.value).subscribe((result: any) => {
      console.log(result)
      this.places = result.features.map((item: any) => {
        return {
          name: item.place_name,
          coordinates: {
            lat: item.center[1],
            lng: item.center[0]
          }
        }
      })

      console.log(this.places)
    })
  }

  selectPlace(place: any): void {
    console.log(place)
    this.inputValue = place.name;
    this.position = place.coordinates;
    this.places = [];
    this.initMap();
  }

}
