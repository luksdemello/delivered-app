import { Request, Response } from "express";
import { FindAllOrdersUseCase } from "./FindAllOrdersUseCase";


class FindAllOrdersController {
  constructor(private findAllOrdersUseCase: FindAllOrdersUseCase) { }

  async handler(request: Request, response: Response): Promise<Response> {
    const orders = await this.findAllOrdersUseCase.execute();

    return response.status(200).json(orders);
  }
}

export { FindAllOrdersController }