import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { connectDatabase } from "./utils/database";
import routes from "./routes";

dotenv.config();

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use("/api", routes);

connectDatabase();

export default app;
