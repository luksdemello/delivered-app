import { QueryResult } from 'pg';
import { pool } from './postgresConnection';

class PostgresPool {

  async query(query: string, params: any): Promise<QueryResult<any>> {
    const client = await pool.connect();

    try {
      const result = await client.query(query, params);
      return result;

    } catch (e) {
      console.log(e);
      throw new Error(e.message);

    } finally {
      client.release();
    }

  }
}

const postgresPool = new PostgresPool();

export { postgresPool }