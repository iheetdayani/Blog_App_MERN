import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import Connectdb from "./services/db.js";
import BlogRoutes from "./routes/BlogRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

Connectdb();

app.use("/api/blogs", BlogRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is Running on PORT:${PORT}`);
});