import query from "../db/index.js";

export async function getAllData() {
  const data = await query("SELECT * FROM workshopTracker");
  return data.rows;
}

export async function getById(id) {
  const data = await query("SELECT * FROM workshopTracker WHERE id = $1", [id]);
  return data.rows;
}

export async function postWorkshop(name, date, progress, mood) {
  const data = await query(
    "INSERT INTO workshopTracker (name, date,progress, mood) VALUES ($1,$2,$3,$4) RETURNING *",
    [name, date, progress, mood]
  );
  return data.rows;
}

export async function updateById(name, date, progress, mood, id) {
  const data = await query(
    "UPDATE workshopTracker SET (name, date, progress, mood) = ($1,$2,$3,$4) WHERE id = $5  RETURNING *",
    [name, date, progress, mood, id]
  );
  return data.rows;
}

export async function deleteById(id) {
  const data = await query("DELETE FROM workshopTracker WHERE id = $1", [id]);
  return data.rows;
}
