import dotenv from "dotenv";
dotenv.config();

const configDev = {
   HOST: process.env.DEV_HOST,
   PORT: process.env.DEV_PORT,
   DB_NAME: process.env.DEV_DB_NAME,
   DB_URL: process.env.DEV_DB_URL,
   DB_PASSWORD: process.env.DEV_DB_PASSWORD,
   JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
   GITHUB_CLIENTID_ID: process.env.GITHUB_CLIENTID_ID,
   GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
   GITHUB_REDIRECT_URL: process.env.GITHUB_REDIRECT_URL,
};

export default configDev;
