import { OrdersRepository } from "../../../repositories/orders/OrdersRepository";
import { FindAllOrdersController } from "./FindAllOrdersController";
import { FindAllOrdersUseCase } from "./FindAllOrdersUseCase";


const ordersRepository = new OrdersRepository();

const findAllOrdersUseCase = new FindAllOrdersUseCase(ordersRepository);

const findAllOrdersController = new FindAllOrdersController(findAllOrdersUseCase);

export { findAllOrdersController }