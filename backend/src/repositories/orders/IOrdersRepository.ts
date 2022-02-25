import { Order } from "../../entities/order/Order";

interface IOrdersRepository {
  findAll(): Promise<Order[]>;
}

export { IOrdersRepository }