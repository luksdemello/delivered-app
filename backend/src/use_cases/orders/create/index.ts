import { OrdersRepository } from "../../../repositories/orders/OrdersRepository";
import { ProductsRepository } from "../../../repositories/products/ProductsRepository";
import { CreateOrderController } from "./CreateOrderController";
import { CreateOrderUseCase } from "./CreateOrderUseCase";


const ordersRepository = new OrdersRepository();
const productsRepository = new ProductsRepository();

const createOrderUseCase = new CreateOrderUseCase(ordersRepository, productsRepository);

const createOrderController = new CreateOrderController(createOrderUseCase);

export { createOrderController }