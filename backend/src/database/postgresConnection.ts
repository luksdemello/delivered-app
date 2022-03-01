import { Pool } from "pg";

const pool = new Pool({
  host: process.env.DATABASE_HOST,
  port: Number(process.env.DATABASE_PORT),
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_DB,
  user: process.env.DATABASE_USER,
  // ssl: { rejectUnauthorized: false }
})

export { pool };