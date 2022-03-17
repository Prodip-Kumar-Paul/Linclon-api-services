import express from "express";
import { getDomains,getSkills } from "../controllers/masterData.js";

const router = express.Router();

router.get("/domains",getDomains);
router.get("/skills",getSkills);
// router.put("/update/:id", isAuthenticatedAndAdmin, updateProject);
// router.put("/delete/:id", isAuthenticatedAndAdmin, deleteProject);
export default router;
