import { Router } from "express";
import {
  create,
  getById,
  getAll,
  deleteById,
  updateById,
} from "../controllers/user.js";

const router = Router();

router.post("/", create);
router.get("/:id", getById);
router.get("/", getAll);
router.delete("/:id", deleteById);
router.put("/:id", updateById);

export default router;
