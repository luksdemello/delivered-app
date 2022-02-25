import { postgresPool } from "../../database/postgresPool";
import { sqlService } from "../../database/sqlService";
import { Order } from "../../entities/order/Order";
import { orderParser } from "../../entities/order/OrderParser";
import { IOrdersRepository } from "./IOrdersRepository";


class OrdersRepository implements IOrdersRepository {
  private source = 'src/repositories/orders/sql';

  async findAll(): Promise<Order[]> {
    const orders: Order[] = [];

    const query = sqlService.get(`${this.source}/find_all.sql`, []);

    const result = await postgresPool.query(query, null);

    for (const row of result.rows) {
      const order = orderParser.postgresParser(row);
      orders.push(order!);
    }

    return orders;
  }

  async create(data: Order): Promise<Order> {
    const params: any[] = [];

    params.push(data.address),
      params.push(data.latitude);
    params.push(data.longitude);
    params.push(data.moment);
    params.push(data.status);

    const query = sqlService.get(`${this.source}/create.sql`, params);
    const result = await postgresPool.query(query, null);

    const order = orderParser.postgresParser(result.rows[0]);

    return order!;

  }

  async inserProduct(orderId: number, productId: number): Promise<void> {
    const params: any[] = [];

    params.push(orderId);
    params.push(productId);

    const query = sqlService.get(`${this.source}/insert_product.sql`, params);
    await postgresPool.query(query, null);
  }

  async update(id: string): Promise<void> {
    const query = sqlService.get(`${this.source}/update.sql`, [id]);
    await postgresPool.query(query, null);
  }
}

export { OrdersRepository }