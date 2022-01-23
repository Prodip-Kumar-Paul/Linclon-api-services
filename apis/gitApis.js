import express from "express";
import {
  getAllRepoDetails,
  getCollaboratorsDetails,
  getCommitsDetails,
  getContentsDetails,
  getContributorsDetails,
  getFollowersDetails,
  getFollowingsDetails,
  getIssuesDetails,
  getLanguagesDetails,
  getParticularRepo,
  getPRsDetails,
  getReadmeDetails,
  getUserDetails,
} from "../controllers/gitControllers.js";
const router = express.Router();

//git api
// authentication required
router.get("/user", getUserDetails);
router.get("/user/followers", getFollowersDetails);
router.get("/user/followings", getFollowingsDetails);
router.get("/getallrepos", getAllRepoDetails);

//particular repo details

router.get("/repo", getParticularRepo);

router.get("/repo/getcollaborators", getCollaboratorsDetails);
router.get("/repo/getissuees", getIssuesDetails);
router.get("/repo/getlanguages", getLanguagesDetails);
router.get("/repo/getcontributors", getContributorsDetails);
router.get("/repo/getcommits",getCommitsDetails);
router.get("/repo/getPRs", getPRsDetails);
router.get("/repo/getcontents", getContentsDetails);
router.get("/repo/getreadme", getReadmeDetails);

export default router;
