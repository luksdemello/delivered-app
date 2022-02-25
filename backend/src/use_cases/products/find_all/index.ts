import { ProductsRepository } from "../../../repositories/products/ProductsRepository";
import { FindAllProductsController } from "./FindAllProductsController";
import { FindAllProductsUseCase } from "./FindAllProductsUseCase";


const productsRepository = new ProductsRepository();

const findAllProductsUseCase = new FindAllProductsUseCase(productsRepository);

const findAllProductsController = new FindAllProductsController(findAllProductsUseCase);

export { findAllProductsController }