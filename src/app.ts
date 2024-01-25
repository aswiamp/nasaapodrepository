import dotenv from "dotenv";
dotenv.config()
import "express-async-errors";
import cors from "cors";
import express from "express";
import sequelize from "./database/connection"; 

import apodRouter from "./routes/apod";

import notFoundMiddleware from "./middleware/not-found";
import errorHandlerMiddleware from "./middleware/error-handler";

const app = express();
dotenv.config();

app.use(express.json());
app.use(cors());

// routes
app.use("/api/v1/", apodRouter);

// middleware
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

//database connection
sequelize
  .sync()
  .then(() => {
    console.log("Synced db");
  })
  .catch((err: Error) => {
    console.log("Failed", err.message);
  });

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is listening on ${port}...`);
});
