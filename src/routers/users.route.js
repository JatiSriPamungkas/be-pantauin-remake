import { Router } from "express";
import { getUser, getUserByUsername } from "../controllers/users.controller.js";

export const router = Router();

router.get("/", getUser);
// router.get("/", getUserByUsername);
