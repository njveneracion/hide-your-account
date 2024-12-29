import express from "express";
import auth from "../middleware/auth.middleware.js";
import {
  getAccounts,
  createAccount,
} from "../controllers/account.controller.js";

const router = express.Router();

router.get("/", auth, getAccounts);
router.post("/create", auth, createAccount);

export default router;
