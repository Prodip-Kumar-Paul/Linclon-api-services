import express from "express";
import { getAllRepoDetails, getFollowersDetails, getFollowingsDetails, getUserDetails } from "../controllers/userControllers.js";

import { isAuthenticated } from "../middlewares/isAuth.js";
const router = express.Router();

//git api
// authentication required

router.get("/user_profile",isAuthenticated, getUserDetails);
router.get("/followers",isAuthenticated, getFollowersDetails);
router.get("/followings",isAuthenticated, getFollowingsDetails);
router.get("/repos",isAuthenticated, getAllRepoDetails);


export default router;
