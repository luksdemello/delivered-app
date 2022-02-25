import { Product } from "../../entities/product/Product";

interface IProductsRepository {
  findAll(): Promise<Product[]>;
}

export { IProductsRepository }