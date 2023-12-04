import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import TodoRouter from "./routes/todo";

// app initialization
dotenv.config();
const app: Express = express();
const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// route handler
app.get("/", (req, res) => {
  res.send(`server is Running your Request method:${req.method}`);
});

// todo router
app.use("/todo", TodoRouter);
// start server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
