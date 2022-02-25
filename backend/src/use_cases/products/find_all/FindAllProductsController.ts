import { Request, Response } from "express";
import { FindAllProductsUseCase } from "./FindAllProductsUseCase";



class FindAllProductsController {
  constructor(private findAllProductsUseCase: FindAllProductsUseCase) { }

  async handler(request: Request, response: Response): Promise<Response> {

    const products = await this.findAllProductsUseCase.execute();

    return response.status(200).json(products);
  }
}

export { FindAllProductsController }