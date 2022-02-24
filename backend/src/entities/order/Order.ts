import { OrderStatus } from "./OrderStatus";


class Order {
  id?: number;
  address: string;
  latitude: number;
  longitude: number;
  moment: Date;
  status: OrderStatus;
  total: number;

  constructor({ id, address, latitude, longitude, moment, status, total }: Order) {
    this.id = id;
    this.address = address;
    this.latitude = latitude;
    this.longitude = longitude;
    this.moment = moment;
    this.status = status;
    this.total = total;
  }
}

export { Order }