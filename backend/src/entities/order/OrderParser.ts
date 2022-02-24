import { validations } from "../../utils/Validations";
import { Order } from "./Order";


class OrderParser {
  postgresParser(postgres: any): Order | null {
    if (validations.isNotParamEmpty(postgres)) {
      return new Order({
        id: postgres['id'],
        address: postgres['address'],
        latitude: postgres['latitude'],
        longitude: postgres['longitude'],
        moment: postgres['moment'],
        status: postgres['status'],
        total: 0
      })
    }
    return null;
  }
}

const orderParser = new OrderParser();

export { orderParser }