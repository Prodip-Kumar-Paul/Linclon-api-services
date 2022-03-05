import express from "express";
import compression from "compression";
import rateLimit from "express-rate-limit";
import helmet from "helmet";
import logger from "morgan";
import cors from "cors";
import xss from "xss-clean";
import hpp from "hpp";
import mongoSanitize from "express-mongo-sanitize";
import { fileURLToPath } from "node:url";
import path, { dirname } from "node:path";

import { globalErrorHandler } from "./utils/errorHandler.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import { checkData } from "./controllers/data/autoCreate.js";

import testApis from "./apis/testApis.js";
import authApis from "./apis/authApis.js";
import userApis from "./apis/Github/userApis.js";
import projectApis from "./apis/Github/projectApis.js";
import webProjectApis  from "./apis/webProjectApis.js";
import cloudinaryUploadApis from "./apis/cloudinaryUploadApis.js"
// import vimeoVideoUploadApis from "./apis/vimeoVideoUploadApis.js";
//app  and middleware
const app = express();
app.use(cors());

app.use(helmet());
app.use(
   express.static(path.join(__dirname, "public"), {
      setHeaders: function (res, path, stat) {
         res.set("x-timestamp", Date.now().toString());
      },
   })
);
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Data sanitization against NoSQL query injection
app.use(
   mongoSanitize({
      onSanitize: ({ req, key }) => {
         console.warn(`This request[${key}] is sanitized`, req);
      },
   })
);

// Data sanitization against XSS
app.use(xss());

// Prevent parameter pollution
app.use(
   hpp({
      whitelist: [
         "duration",
         "ratingsQuantity",
         "ratingsAverage",
         "maxGroupSize",
         "difficulty",
         "price",
      ],
   })
);

app.use(compression());

// Limit requests from same API
const limiter = rateLimit({
   max: 100,
   windowMs: 60 * 60 * 1000,
   message: "Too many requests from this IP, please try again in an hour!",
});
app.use(limiter);

app.use((req, res, next) => {
   res.setHeader("Access-Control-Allow-Origin", "*");
   res.setHeader("Access-Control-Allow-Methods", "*");
   res.setHeader("Access-Control-Allow-Headers", "Content-Type,Authorization");
   next();
});
checkData();
app.use("/api/v1/test", testApis);
app.use("/api/v1/auth", authApis);
app.use("/api/v1/user", userApis);
app.use("/api/v1/project", projectApis);
app.use("/api/v1/webproject",webProjectApis);
app.use("/api/v1/cloudinary",cloudinaryUploadApis);
// app.use("/api/v1/vimeo",vimeoVideoUploadApis);

// EROOR HANDLING MIDDLEWARE
app.use(globalErrorHandler);

// 404 MIDDLEWARE
app.use((req, res, next) => {
   res.status(404).json({
      message: "resourse not found",
   });
});

export default app;
