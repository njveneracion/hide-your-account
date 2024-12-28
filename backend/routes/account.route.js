import express from "express";
import auth from "../middleware/auth.middleware.js";
import { getAccounts } from "../controllers/account.controller.js";
const router = express.Router();

router.get("/", auth, getAccounts);

export default router;
