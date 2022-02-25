import { Product } from "../product/Product";
import { OrderStatus } from "./OrderStatus";


class Order {
  id?: number;
  address: string;
  latitude: number;
  longitude: number;
  moment: Date;
  status: OrderStatus;
  total: number;
  products: Product[];

  constructor({ id, address, latitude, longitude, moment, status, total, products }: Order) {
    this.id = id;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
    this.moment = moment;
    this.status = status;
    this.total = total;
    this.products = products;
  }
}

export { Order }