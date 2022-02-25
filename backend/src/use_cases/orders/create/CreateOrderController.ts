import { Request, Response } from "express";
import { OrderStatus } from "../../../entities/order/OrderStatus";
import { CreateOrderUseCase } from "./CreateOrderUseCase";



class CreateOrderController {
  constructor(private createOrderUseCase: CreateOrderUseCase) { }

  async handler(request: Request, response: Response): Promise<Response> {

    const {
      address,
      latitude,
      longitude,
      products
    } = request.body;

    const product = await this.createOrderUseCase.execute({
      address,
      latitude,
      longitude,
      moment: new Date().toISOString(),
      status: OrderStatus.Pending,
      products
    })

    return response.status(201).json(product);
  }
}

export { CreateOrderController }