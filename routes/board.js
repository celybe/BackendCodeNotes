import { Router } from "express";
import {
  create,
  getById,
  getAll,
  deleteById,
  // updateById,
} from "../controllers/board.js";

const router = Router();

router.put("/:id", create);
router.get("/:id/:userID", getById);
router.get("/:id", getAll);
router.put("/:id/:userID", deleteById);
//router.put("/:id", updateById);

export default router;
