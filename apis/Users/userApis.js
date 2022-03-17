import express from "express";

import {
  getAllRepoDetails,
  getFollowersDetails,
  getFollowingsDetails,
  getUserDetails,
  updateImageUrl,
} from "../../controllers/UserControllers/userControllers.js";

import { isAuthenticated,isAuthenticatedAndAdmin } from "../../middlewares/isAuth.js";
const router = express.Router();

//git api
// authentication required

router.get("/user_profile", isAuthenticatedAndAdmin, getUserDetails);
router.get("/followers", isAuthenticated, getFollowersDetails);
router.get("/followings", isAuthenticated, getFollowingsDetails);
router.get("/repos", isAuthenticated, getAllRepoDetails);
router.put("/updateimage", isAuthenticated, updateImageUrl);

export default router;
