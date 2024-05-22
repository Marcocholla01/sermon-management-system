import express from "express";
import dotenv, { config } from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

dotenv.config({
  path: "config/.env",
});

const app = express();
const port = process.env.PORT || 2001;

app.use(cors());
app.use(express.json());
app.use(cookieParser());

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
