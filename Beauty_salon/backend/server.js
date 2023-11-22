import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import mongoose from "mongoose";
import router from "./routes/routes.js";

dotenv.config();

const MONGO_URL = process.env.MONGO_URL;
const PORT = process.env.PORT || 3001;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to Database"))
  .catch((error) => console.log(error));

const app = express();

app.use(express.json());
app.use(cors());
app.use(router);

app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));
