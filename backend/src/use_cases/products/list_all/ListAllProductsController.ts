import { Request, Response } from "express";
import { ListAllProductsUseCase } from "./ListAllProductsUseCase";



class ListAllProductsController {
  constructor(private listAllProductsUseCase: ListAllProductsUseCase) { }

  async handler(request: Request, response: Response): Promise<Response> {

    const products = await this.listAllProductsUseCase.execute();

    return response.status(201).json(products);
  }
}

export { ListAllProductsController }