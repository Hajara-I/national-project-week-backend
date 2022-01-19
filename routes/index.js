import express from "express";
const router = express.Router();

import {
  getAllData,
  getById,
  postWorkshop,
  deleteById,
  updateById,
} from "../models/workshopTracker.js";

/* GET home page. */
router.get("/", async function (req, res, next) {
  const data = await getAllData();
  res.json({ success: true, payload: data });
});

router.get("/:id", async function (req, res, next) {
  const { id } = req.params;
  const data = await getById(id);
  res.json({ success: true, payload: data });
});

router.post("/", async function (req, res, next) {
  const { name, date, progress, mood } = req.body;
  const data = await postWorkshop(name, date, progress, mood);
  res.json({ success: true, payload: data });
});

router.patch("/:id", async function (req, res, next) {
  const { id } = req.params;
  const { name, date, progress, mood } = req.body;
  const data = await updateById(name, date, progress, mood, id);
  res.json({ success: true, payload: data });
});

router.delete("/:id", async function (req, res, next) {
  const { id } = req.params;
  const deletedData = await deleteById(id);
  res.json({ success: true, payload: deletedData });
});

export default router;
