import { Router } from "express";
import { alterOrderController } from "../use_cases/orders/alter_order";
import { createOrderController } from "../use_cases/orders/create";
import { findAllOrdersController } from "../use_cases/orders/find_all";

const ordersRouter = Router();

ordersRouter.get('/', (request, response) => {
  return findAllOrdersController.handler(request, response);
})

ordersRouter.post('/', (request, response) => {
  return createOrderController.handler(request, response);
})

ordersRouter.patch('/:id/delivered', (request, response) => {
  return alterOrderController.handler(request, response);
})

export { ordersRouter }