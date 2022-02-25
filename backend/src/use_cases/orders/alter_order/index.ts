import { OrdersRepository } from "../../../repositories/orders/OrdersRepository";
import { AlterOrderController } from "./AlterOrderController";
import { AlterOrderUseCase } from "./AlterOrderUseCase";

const ordersRepository = new OrdersRepository();

const alterOrderUseCase = new AlterOrderUseCase(ordersRepository);

const alterOrderController = new AlterOrderController(alterOrderUseCase);

export { alterOrderController }