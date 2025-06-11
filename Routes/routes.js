import express from "express";
import { validateItemFields } from "../middleware/ValidateItem.js";
import {
  getItems,
  getItemBYId,
  addNewItem,
  updatedItemById,
  deleteItemByID,
} from "../controllers/routerMethod.js";
const router = express.Router();
// GET all items
router.get("/", getItems);

// GET item by ID
router.get("/:id", getItemBYId);

// POST a new item with validation middleware
router.post("/", validateItemFields, addNewItem);

// PUT (update) item with same validation middleware
router.put("/:id", validateItemFields, updatedItemById);

// DELETE item
router.delete("/:id", deleteItemByID);

export default router;
