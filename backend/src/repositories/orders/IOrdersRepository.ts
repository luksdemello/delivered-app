import { Order } from "../../entities/order/Order";

interface IOrdersRepository {
  findAll(): Promise<Order[]>;
  create(data: Order): Promise<Order>
  inserProduct(orderId: number, productId: number): Promise<void>;
  update(id: string): Promise<void>
}

export { IOrdersRepository }