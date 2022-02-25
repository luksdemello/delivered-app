import { postgresPool } from "../../database/postgresPool";
import { sqlService } from "../../database/sqlService";
import { Product } from "../../entities/product/Product";
import { productParser } from "../../entities/product/ProductParser";
import { IProductsRepository } from "./IProductsRespository";


class ProductsRepository implements IProductsRepository {
  listAll(): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
  private source = 'src/repositories/products/sql';

  async findAll(): Promise<Product[]> {
    const products: Product[] = [];

    const query = sqlService.get(`${this.source}/find_all.sql`, []);

    const result = await postgresPool.query(query, null);

    for (const row of result.rows) {
      const product = productParser.postgresParser(row);
      products.push(product!);
    }

    return products;
  }

  async findOne(id: number): Promise<Product | null> {
    const query = sqlService.get(`${this.source}/find_one.sql`, [id]);

    const result = await postgresPool.query(query, null);

    const product = productParser.postgresParser(result.rows[0]);

    return product;
  }

}

export { ProductsRepository }