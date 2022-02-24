import dotenv from "dotenv";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({
   path: path.join(__dirname, `config.${process.env.NODE_ENV.trim()}.env`),
});
// console.log(
//    "ENV file path --> ",
//    path.join(__dirname, `config.${process.env.NODE_ENV.trim()}.env`)
// );

import configDev from "./config.dev.js";
import configProd from "./config.prod.js";

let config = {};

if (process.env.NODE_ENV.trim() === "dev") {
   config = { ...configDev };
} else if (process.env.NODE_ENV.trim() === "prod") {
   config = { ...configProd };
}
// console.log(config);

export default config;
