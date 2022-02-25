import { Request, Response } from 'express'
import { AlterOrderUseCase } from './AlterOrderUseCase';

class AlterOrderController {
  constructor(private alterOrderUseCase: AlterOrderUseCase) { }

  async handler(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    this.alterOrderUseCase.execute(id);

    return response.status(200).json({ message: 'OK' });
  }
}

export { AlterOrderController }