import { validations } from "../../utils/Validations";
import { Product } from "../product/Product";
import { productParser } from "../product/ProductParser";
import { Order } from "./Order";


class OrderParser {
  postgresParser(postgres: any): Order | null {
    if (validations.isNotParamEmpty(postgres)) {

      const products: Product[] = [];

      if (validations.isNotParamEmpty(postgres['products'])) {
        for (const row of postgres['products']) {
          const product = productParser.postgresParser(row);
          products.push(product!);
        }
      }


      return new Order({
        id: postgres['id'],
        address: postgres['address'],
        latitude: postgres['latitude'],
        longitude: postgres['longitude'],
        moment: postgres['moment'],
        status: postgres['status'],
        total: products.reduce((acc, curr) => {
          return acc + curr.price;
        }, 0),
        products: products.length > 0 ? products : undefined
      })
    }
    return null;
  }
}

const orderParser = new OrderParser();

export { orderParser }