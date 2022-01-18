import "dotenv/config";
import pg from "pg";

import {
  databaseHost,
  databaseName,
  dbPort,
  password,
  username,
} from "../config.js";

const pool = new pg.Pool({
  user: username,
  host: databaseHost,
  database: databaseName,
  password: password,
  port: dbPort,
  ssl: { rejectUnauthorized: false },
});

export default function query(text, params) {
  return pool.query(text, params);
}
