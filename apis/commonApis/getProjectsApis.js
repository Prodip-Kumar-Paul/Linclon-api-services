import express from "express";
import { getAllProjects,getParticularProject } from "../../controllers/commonControllers/getProjectsControllers.js";
import { isAuthenticated } from "../../middlewares/isAuth.js";


const router = express.Router();
router.get("/allprojects", isAuthenticated, getAllProjects);
router.get("/project", isAuthenticated, getParticularProject);
export default router;