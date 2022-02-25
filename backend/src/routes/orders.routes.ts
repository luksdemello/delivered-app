import { Router } from "express";
import { createOrderController } from "../use_cases/orders/create";
import { findAllOrdersController } from "../use_cases/orders/find_all";

const ordersRouter = Router();

ordersRouter.get('/', (request, response) => {
  return findAllOrdersController.handler(request, response);
})

ordersRouter.post('/', (request, response) => {
  return createOrderController.handler(request, response);
})

export { ordersRouter }