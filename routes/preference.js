import { Router } from "express";
import { getById, updateById } from "../controllers/preferences.js";

const router = Router();

router.get("/:id", getById);
router.put("/:id", updateById);

export default router;
