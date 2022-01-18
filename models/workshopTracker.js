import query from "../db/index.js";

export async function getAllData() {
  const data = await query("SELECT * FROM workshopTracker");
  return data.rows;
}
