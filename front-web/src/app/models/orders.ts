export interface IOrders {
  latitude: number;
  longitude: number;
  address: string;
}

export class Orders implements IOrders {
  latitude: number;
  longitude: number;
  address: string;

  constructor(latitude: number, longitude: number, address: string) {
    this.latitude = latitude;
    this.longitude = longitude;
    this.address = address;
  }
}
