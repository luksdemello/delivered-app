import { readFileSync } from 'fs';
import { resolve } from 'path';

class SqlService {

  get(path: string, params: any[]) {

    try {
      let dataSql = readFileSync(resolve(path)).toString();

      if (params.length > 0) {
        let countParameter = 0;

        for (let param of params) {
          countParameter++;

          if (param !== null) {
            const parameterSql = `@P${countParameter}@`;
            if (dataSql.includes(parameterSql)) {
              dataSql = dataSql.replace(`@P${countParameter}@`, param);
            }
          }

        }
      }
      return dataSql;
    } catch (error) {
      throw new Error('Montagem SQL ERROR')
    }
  }
}

const sqlService = new SqlService();

export { sqlService };