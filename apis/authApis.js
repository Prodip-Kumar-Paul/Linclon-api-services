import express from "express";
import { body } from "express-validator";
import { errorHandler } from "../utils/errorHandler.js";
import { signUpOrLoginController } from "../controllers/authControllers.js";
const router = express.Router();

router.post(
   "/signup_or_login",
   [
      body("userType")
         // .isIn(["User", "Admin"])
         .notEmpty()
         .withMessage("Invalid Usertype"),
   ],
   [body("email").normalizeEmail().isEmail().withMessage("Invalid Email")],
   [body("githubCode").notEmpty().withMessage("Invalid Github Code")],
   errorHandler,
   signUpOrLoginController
);
export default router;
