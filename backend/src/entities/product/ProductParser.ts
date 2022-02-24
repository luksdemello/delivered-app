import { validations } from "../../utils/Validations";
import { Product } from "./Product";


class ProductParser {
  postgresParser(postgres: any): Product | null {
    if (validations.isNotParamEmpty(postgres)) {
      return new Product({
        id: postgres['id'],
        name: postgres['name'],
        description: postgres['description'],
        price: postgres['price'],
        imageUri: postgres['image_uri']
      })
    }
    return null;
  }
}

const productParser = new ProductParser();

export { productParser }