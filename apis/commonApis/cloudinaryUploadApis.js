import express from "express";
import upload from "../../utils/multer.js";

import { isAuthenticated } from "../../middlewares/isAuth.js";
import { uploadImage } from "../../controllers/commonControllers/cloudinaryUploadController.js";
const router = express.Router();

router.post(
  "/uploadImage",
  isAuthenticated,
  upload.single("image"),
  uploadImage
);
export default router;
