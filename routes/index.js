import express from "express";
const router = express.Router();

import { getAllData } from "../models/workshopTracker.js";

/* GET home page. */
router.get("/", async function (req, res, next) {
  const data = await getAllData();
  res.json({ success: true, payload: data });
});

export default router;
