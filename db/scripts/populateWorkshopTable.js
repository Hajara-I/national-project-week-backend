import sampleData from "../../data.js";
import query from "../index.js";

async function populateWorkshopTable() {
  for (let i = 0; i < sampleData.length; i++) {
    const { name, date, progress, mood } = sampleData[i];
    const res = await query(
      "INSERT INTO workshopTracker (name, date, progress, mood) VALUES ($1,$2,$3,$4) RETURNING *",
      [name, date, progress, mood]
    );
    console.log("LOOOOOOOOK", res);
  }
}
populateWorkshopTable();
