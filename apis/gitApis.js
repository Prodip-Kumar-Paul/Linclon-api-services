import express from "express";
import { getUserDetails } from "../controllers/gitControllers.js";

import { isAuthenticated } from "../middlewares/isAuth.js";
const router = express.Router();

//git api
// authentication required

router.get("/user_profile",isAuthenticated, getUserDetails);
// router.get("/user/followers",[isAuthenticated], getFollowersDetails);
// router.get("/user/followings",[isAuthenticated], getFollowingsDetails);
// router.get("/getallrepos",[isAuthenticated], getAllRepoDetails);

//particular repo details

// router.get("/repo", getParticularRepo);

// router.get("/repo/getcollaborators", getCollaboratorsDetails);
// router.get("/repo/getissuees", getIssuesDetails);
// router.get("/repo/getlanguages", getLanguagesDetails);
// router.get("/repo/getcontributors", getContributorsDetails);
// router.get("/repo/getcommits",getCommitsDetails);
// router.get("/repo/getPRs", getPRsDetails);
// router.get("/repo/getcontents", getContentsDetails);
// router.get("/repo/getreadme", getReadmeDetails);

export default router;
