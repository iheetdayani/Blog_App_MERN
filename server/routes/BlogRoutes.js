import express from "express";
import cors from "cors";
import BlogController from "../controller/BlogController.js";

const app = express.Router();

app.use(express.json());
app.use(cors());

app.get("/getBlogAll", BlogController.getBlogAll);

app.post("/", BlogController.createBlog);

app.put("/UpdateBlog/:id", BlogController.UpdateBlog);

app.delete("/DeleteBlog/:id", BlogController.DeleteBlog);

app.get("/getBlogAllbyId/:id", BlogController.getBlogAllbyId);

app.get("/category/:category", BlogController.SortBlogByCategory);

export default app;