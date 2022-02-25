import { Product } from "../../../entities/product/Product";
import { IProductsRepository } from "../../../repositories/products/IProductsRespository";



class FindAllProductsUseCase {
  constructor(private productsRepository: IProductsRepository) { }

  async execute(): Promise<Product[]> {
    const products = await this.productsRepository.findAll();

    return products;
  }
}

export { FindAllProductsUseCase }