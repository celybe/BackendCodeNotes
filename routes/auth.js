import { Router } from "express";
import { checkUsernameExist } from "../controllers/auth.js";

const router = Router();

router.get("/check/username/:username", checkUsernameExist);

export default router;
