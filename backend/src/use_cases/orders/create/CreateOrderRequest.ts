import { OrderStatus } from "../../../entities/order/OrderStatus";

interface ICreateOrderRequest {
  address: string;
  latitude: number;
  longitude: number;
  moment: string;
  status: OrderStatus;
  products: IProductsRequest[]
}

interface IProductsRequest {
  id: number;
}

export { ICreateOrderRequest }