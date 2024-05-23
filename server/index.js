// Packages imports
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

// Route imports
import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import postRoutes from "./routes/postsRoutes.js";
import { corsOptions } from "./utils/corsOptions.js";

dotenv.config({
  path: "config/.env",
});

const app = express();
const port = process.env.PORT || 2001;

app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/users", userRoutes);
app.use("/api/v1/posts", postRoutes);

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
