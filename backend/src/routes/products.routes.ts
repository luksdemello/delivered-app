import { Router } from "express";
import { listAllProductsController } from "../use_cases/products/list_all";

const productsRouter = Router();

productsRouter.get('/', (request, response) => {
  return listAllProductsController.handler(request, response);
})

export { productsRouter }