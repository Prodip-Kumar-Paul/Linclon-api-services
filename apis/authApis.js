import express from "express";
import {authControllers} from "../controllers/authControllers.js";
const router = express.Router();

//auth api
router.get("/auth", authControllers);

export default router;
