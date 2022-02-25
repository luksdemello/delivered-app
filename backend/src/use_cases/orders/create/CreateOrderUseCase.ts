import { Order } from "../../../entities/order/Order";
import { Product } from "../../../entities/product/Product";
import { IOrdersRepository } from "../../../repositories/orders/IOrdersRepository";
import { IProductsRepository } from "../../../repositories/products/IProductsRespository";
import { ICreateOrderRequest } from "./CreateOrderRequest";



class CreateOrderUseCase {
  constructor(
    private ordersRepository: IOrdersRepository,
    private productsRepository: IProductsRepository
  ) { }

  async execute(request: ICreateOrderRequest): Promise<Order> {
    const order = await this.ordersRepository.create({
      address: request.address,
      latitude: request.latitude,
      longitude: request.longitude,
      moment: request.moment,
      status: request.status
    });

    const products: Product[] = []

    for (const req of request.products) {
      const product = await this.productsRepository.findOne(req.id);
      const inserProduct = await this.ordersRepository.inserProduct(order.id!, req.id);

      if (product)
        products.push(product)
    }

    order.products = products;

    return order;
  }
}

export { CreateOrderUseCase }