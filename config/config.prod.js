import dotenv from "dotenv";
dotenv.config({ path: "./config.prod.env" });

const configProd = {
   HOST: process.env.PROD_HOST,
   PORT: process.env.PROD_PORT,
   JWT_SECRET_KEY: process.env.JWT_SECRET_KEY,
   DB_NAME: process.env.PROD_DB_NAME,
   DB_URL: process.env.PROD_DB_URL,
   DB_PASSWORD: process.env.PROD_DB_PASSWORD,
   GITHUB_CLIENTID_ID: process.env.GITHUB_CLIENTID_ID,
   GITHUB_CLIENT_SECRET: process.env.GITHUB_CLIENT_SECRET,
   GITHUB_REDIRECT_URL: process.env.GITHUB_REDIRECT_URL,
};

export default configProd;
