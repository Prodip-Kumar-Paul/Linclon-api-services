import dotenv from "dotenv";
dotenv.config();

const configDev = {
   HOST: process.env.DEV_HOST,
   PORT: process.env.DEV_PORT,
   DB_NAME: process.env.DEV_DB_NAME,
   DB_URL: process.env.DEV_DB_URL,
   DB_PASSWORD: process.env.DEV_DB_PASSWORD,
};

export default configDev;
