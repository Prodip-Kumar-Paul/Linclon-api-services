import { validationResult } from "express-validator";

const errorHandler = (req, res, next) => {
   try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
         res.status(200).json({
            type: 0,
            message: "invalid inputs",
            errors: errors.array().map(({ msg, param }) => {
               return {
                  msg,
                  param,
               };
            }),
         });
      } else {
         next();
      }
   } catch (err) {
      console.log(err);
      res.status(500).json({
         status: false,
         message: "server error",
      });
   }
};

const sendErrorDev = (err, req, res) => {
   return res.status(err.statusCode).json({
      error: err,
      message: err.message,
      data: err.data,
      status: err.status,
      stack: err.stack,
   });
};

const sendErrorProd = (err, req, res) => {
   return res.status(err.statusCode).json({
      message: err.message,
      data: err.data,
      status: err.status,
   });
};

const globalErrorHandler = (err, req, res, next) => {
   console.log("Culprit lies here ..... ", err);

   err.statusCode = err.statusCode || 500;
   err.status = err.status || false;
   err.data = err.data || [];

   if (process.env.NODE_ENV.trim() === "dev") {
      sendErrorDev(err, req, res);
   } else if (process.env.NODE_ENV.trim() === "prod") {
      sendErrorProd(err, req, res);
   }
};

export { globalErrorHandler, errorHandler };
