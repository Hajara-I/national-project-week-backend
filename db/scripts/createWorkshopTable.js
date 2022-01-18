import query from "../index.js";
const sqlString =
  "CREATE TABLE IF NOT EXISTS workshopTracker (id SERIAL PRIMARY KEY, name TEXT, date DATE,progress INT, mood TEXT)";

async function createTable() {
  const res = await query(sqlString);
  console.log("Created table", res);
}

createTable();
