import jwt from "jsonwebtoken";
import config from "../config/config.js";

export const isAuthenticated = async (req, res, next) => {
   try {
      const authToken = req.get("Authorization");
      //  console.log(authToken);
      if (!authToken) {
         const error = new Error("No authentication token attached");
         error.statusCode = 401;
         throw error;
      }

      const token = authToken.split(" ")[1];
      const { exp } = jwt.decode(token);
      if (Date.now() >= exp * 1000) {
         const error = new Error("Token Expired");
         error.statusCode = 401;
         throw error;
      }

      const decodedToken = jwt.verify(token, config.JWT_SECRET_KEY);
      if (!decodedToken) {
         const error = new Error("Not authenticated");
         error.statusCode = 401;
         throw error;
      }
      // console.log(decodedToken);

      req.id = decodedToken.id;
      req.githubToken = decodedToken.githubToken;
      // console.log(req.githubToken);
      req.userType = decodedToken.userType;

      next();
   } catch (err) {
      next(err);
   }
};

export const isAuthenticatedAndAdmin = async (req, res, next) => {
   try {
      const authToken = req.get("Authorization");

      if (!authToken) {
         const error = new Error("No authentication token attached");
         error.statusCode = 401;
         throw error;
      }

      const token = authToken.split(" ")[1];

      const { exp } = jwt.decode(token);
      if (Date.now() >= exp * 1000) {
         const error = new Error("Token Expired");
         error.statusCode = 401;
         throw error;
      }

      const decodedToken = jwt.verify(token, config.JWT_SECRET_KEY);
      if (!decodedToken) {
         const error = new Error("Not authenticated");
         error.statusCode = 401;
         throw error;
      }
     
      // console.log(decodedToken);
      if (decodedToken.type !== "Admin") {
         const error = new Error("Unauthorized");
         error.statusCode = 401;
         throw error;
      }

      req.id = decodedToken.id;
      req.userType = decodedToken.type;
      req.githubToken = decodedToken.githubToken;

      next();
   } catch (err) {
      next(err);
   }
};
