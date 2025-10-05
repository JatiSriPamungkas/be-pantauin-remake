import { Router } from "express";
import { getUser } from "../controllers/users.controller.js";

export const router = Router();

router.get("/", getUser);
