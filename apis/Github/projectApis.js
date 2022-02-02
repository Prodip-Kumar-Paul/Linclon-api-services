import express from "express";
import {
  getCollaboratorsDetails,
  getCommitsDetails,
  getContentsDetails,
  getContributorsDetails,
  getIssuesDetails,
  getLanguagesDetails,
  getParticularRepo,
  getPRsDetails,
  getReadmeDetails,
} from "../../controllers/githubControllers/projectControllers.js";
import { isAuthenticated } from "../../middlewares/isAuth.js";
const router = express.Router();

router.get("/project_info", isAuthenticated, getParticularRepo);
router.get("/collaborators", isAuthenticated, getCollaboratorsDetails);
router.get("/issues", isAuthenticated, getIssuesDetails);
router.get("/languages", isAuthenticated, getLanguagesDetails);
router.get("/contributators", isAuthenticated, getContributorsDetails);
router.get("/commits", isAuthenticated, getCommitsDetails);
router.get("/PRs", isAuthenticated, getPRsDetails);
router.get("/contents", isAuthenticated, getContentsDetails);
router.get("/readme", isAuthenticated, getReadmeDetails);

export default router;
