import dotenv from "dotenv";
dotenv.config({ path: "./config.prod.env" });

const configProd = {
  HOST: process.env.PROD_HOST,
  PORT: process.env.PROD_PORT,
  DB_NAME: process.env.PROD_DB_NAME,
  DB_URL: process.env.PROD_DB_URL,
  DB_PASSWORD: process.env.PROD_DB_PASSWORD,
};

export default configProd;
