import express from "express";
import {
    deleteProject,
  getAllProjects,
  getParticularProject,
  postProject,
  updateProject,
} from "../controllers/webProjectControllers.js";
import { isAuthenticated } from "../middlewares/isAuth.js";

const router = express.Router();

router.post("/project", isAuthenticated, postProject);
router.get("/allprojects", isAuthenticated, getAllProjects);
router.get("/project", isAuthenticated, getParticularProject);
router.put("/update/:id", isAuthenticated, updateProject);
router.put("/delete/:id",deleteProject);
export default router;
