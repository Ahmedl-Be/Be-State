import express from "express";
const router = express.Router();
import { signUp,signIn } from "../controllers/auth.controller.js";

router.post("/signUp",signUp)
router.post("/signIn",signIn)


export default router;