import { Router } from "express";
import { findAllOrdersController } from "../use_cases/orders/find_all";

const ordersRouter = Router();

ordersRouter.get('/', (request, response) => {
  return findAllOrdersController.handler(request, response);
})

export { ordersRouter }