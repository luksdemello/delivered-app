export interface IOrders {
  latitude: number;
  longitude: number;
  address: string;
}

export class Orders implements IOrders {
  latitude: number;
  longitude: number;
  address: string;
  products: ProductId[];

  constructor(latitude: number, longitude: number, address: string, products: ProductId[]) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.address = address;
    this.products = products;
  }
}

export type ProductId = {
  id: number;
}
