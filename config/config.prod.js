import dotenv from "dotenv";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
dotenv.config({
   path: path.join(
      __dirname,
      `config.${
         process.env.NODE_ENV ? process.env.NODE_ENV.trim() : "prod"
      }.env`
   ),
});

const configProd = {
   HOST: process.env.HOST,
   PORT: process.env.PORT,
   JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
   DB_NAME: process.env.DB_NAME,
   DB_URL: process.env.DB_URL,
   DB_PASSWORD: process.env.DB_PASSWORD,
   GITHUB_CLIENTID_ID: process.env.GITHUB_CLIENTID_ID,
   GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
   GITHUB_REDIRECT_URL: process.env.GITHUB_REDIRECT_URL,
   CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
   CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
   CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
};

export default configProd;
