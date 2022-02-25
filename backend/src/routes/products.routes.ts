import { Router } from "express";
import { findAllProductsController } from "../use_cases/products/find_all";

const productsRouter = Router();

productsRouter.get('/', (request, response) => {
  return findAllProductsController.handler(request, response);
})

export { productsRouter }