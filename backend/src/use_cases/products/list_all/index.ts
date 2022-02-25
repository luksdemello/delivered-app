import { ProductsRepository } from "../../../repositories/products/ProductsRepository";
import { ListAllProductsController } from "./ListAllProductsController";
import { ListAllProductsUseCase } from "./ListAllProductsUseCase";


const productsRepository = new ProductsRepository();

const listAllProductsUseCase = new ListAllProductsUseCase(productsRepository);

const listAllProductsController = new ListAllProductsController(listAllProductsUseCase);

export { listAllProductsController }