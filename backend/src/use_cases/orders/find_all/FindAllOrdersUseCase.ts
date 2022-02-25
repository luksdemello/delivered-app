import { Order } from "../../../entities/order/Order";
import { IOrdersRepository } from "../../../repositories/orders/IOrdersRepository";


class FindAllOrdersUseCase {
  constructor(private ordersRepository: IOrdersRepository) { }

  async execute(): Promise<Order[]> {
    const orders = await this.ordersRepository.findAll();

    return orders;
  }
}

export { FindAllOrdersUseCase }