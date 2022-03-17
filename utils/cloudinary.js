import cloudinary from "cloudinary";
import config from "../config/config.js";
import dotenv from "dotenv";

cloudinary.config({
  cloud_name: config.CLOUDINARY_CLOUD_NAME,
  api_key: config.CLOUDINARY_API_KEY,
  api_secret: config.CLOUDINARY_API_SECRET
  ,
});

export default cloudinary;
