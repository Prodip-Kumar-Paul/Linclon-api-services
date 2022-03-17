import express from "express";
import {
  deleteProject,
  postProject,
  updateProject,
} from "../controllers/adminControllers.js";
import { isAuthenticatedAndAdmin } from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/project", isAuthenticatedAndAdmin, postProject);
router.put("/update/:id", isAuthenticatedAndAdmin, updateProject);
router.put("/delete/:id", isAuthenticatedAndAdmin, deleteProject);
export default router;
