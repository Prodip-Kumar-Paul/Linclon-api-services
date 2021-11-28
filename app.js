require("dotenv").config();
const express = require("express");
const compression = require("compression");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const logger = require("morgan");
const cors = require("cors");
const xss = require("xss-clean");
const hpp = require("hpp");
const mongoSanitize = require("express-mongo-sanitize");
const path = require("path");

const { globalErrorHandler } = require("./utils/errorHandler");

const testApis = require("./apis/testApis");

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

app.use("/api/v1/test", testApis);

// EROOR HANDLING MIDDLEWARE
app.use(globalErrorHandler);

// 404 MIDDLEWARE
app.use((req, res, next) => {
  res.status(404).json({
    message: "resourse not found",
  });
});

module.exports = app;
