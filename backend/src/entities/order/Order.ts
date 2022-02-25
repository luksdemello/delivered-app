import { Product } from "../product/Product";
import { OrderStatus } from "./OrderStatus";


class Order {
  address: string;
  latitude: number;
  longitude: number;
  moment: string;
  status: OrderStatus;
  id?: number;
  total?: number;
  products?: Product[];

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