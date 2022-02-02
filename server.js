import mongoose from "mongoose";
import config from "./config/config.js";

// import { MongoClient } from "mongodb";
// import fs from "node:fs";
// import db_certificate from "./data/linclon_db.pem";

process.on("uncaughtException", (err) => {
   console.log("UNCAUGHT EXCEPTION! 💥 Shutting down...");
   console.log(err.name, err.message);
   process.exit(1);
});

import app from "./app.js";

// const credentials = fs.readFileSync(db_certificate, "utf-8");

// const client = new MongoClient(
//    `mongodb+srv://cluster0.hkfcc.mongodb.net/${config.DB_NAME}?authSource=%24external&authMechanism=MONGODB-X509&retryWrites=true&w=majority`,
//    {
//       sslKey: credentials,
//       sslCert: credentials,
//    }
// );

// async function run() {
//    try {
//       await client.connect();
//       const database = client.db("testDB");
//       const collection = database.collection("testCol");
//       const docCount = await collection.countDocuments({});
//       console.log(docCount);
//       // perform actions using client
//    } finally {
//       // Ensures that the client will close when you finish/error
//       await client.close();
//    }
// }

// run().catch(console.dir);

const DB = config.DB_URL.replace("<password>", config.DB_PASSWORD);

// DB connection
mongoose
   .connect(DB, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
   })
   .then(() => {
      console.log("DB connected successfully!");
   })
   .catch((err) => console.log(err));

const port = config.PORT || 8080;
const server = app.listen(port, () => {
   console.log(`Server started on: ${port}`);
});

process.on("unhandledRejection", (err) => {
   console.log("UNHANDLED REJECTION! 💥 Shutting down...");
   console.log(err.name, err.message);
   server.close(() => {
      process.exit(1);
   });
});

process.on("SIGTERM", () => {
   console.log("👋 SIGTERM RECEIVED. Shutting down gracefully");
   server.close(() => {
      console.log("💥 Process terminated!");
   });
});
