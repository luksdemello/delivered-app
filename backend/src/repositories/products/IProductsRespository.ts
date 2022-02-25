import { Product } from "../../entities/product/Product";

interface IProductsRepository {
  findAll(): Promise<Product[]>;
  findOne(id: number): Promise<Product | null>
}

export { IProductsRepository }