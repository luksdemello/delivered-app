import { IOrdersRepository } from "../../../repositories/orders/IOrdersRepository";


class AlterOrderUseCase {
  constructor(private ordersRepository: IOrdersRepository) { }

  async execute(id: string): Promise<void> {
    await this.ordersRepository.update(id);
  }
}

export { AlterOrderUseCase }