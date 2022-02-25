import { postgresPool } from "../../database/postgresPool";
import { sqlService } from "../../database/sqlService";
import { Order } from "../../entities/order/Order";
import { orderParser } from "../../entities/order/OrderParser";
import { IOrdersRepository } from "./IOrdersRepository";


class OrdersRepository implements IOrdersRepository {
  private source = 'src/repositories/orders/sql';

  async findAll(): Promise<Order[]> {
    const orders: Order[] = [];

    const query = sqlService.get(`${this.source}/find-all.sql`, []);

    const result = await postgresPool.query(query, null);

    for (const row of result.rows) {
      const order = orderParser.postgresParser(row);
      orders.push(order!);
    }

    return orders;
  }
}

export { OrdersRepository }