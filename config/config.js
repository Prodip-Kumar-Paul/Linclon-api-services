import dotenv from "dotenv";
dotenv.config();

import configDev from "./config.dev.js";
import configProd from "./config.prod.js";

let config = {};

if (process.env.NODE_ENV === 'development') {
	config = { ...configDev };
} else if (process.env.NODE_ENV === "production") {
	config = { ...configProd };
}

export default config;
