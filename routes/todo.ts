import { Router } from "express";
import { prisma } from "../prisma/prisma";

const TodoRouter = Router();
// create todo
TodoRouter.post("/", async (req, res) => {
  const { title, content } = req.body;
  const todo = await prisma.todo.create({
    data: {
      title: title as string,
      content: content as string,
      is_complated: false,
    },
  });
  return res.send("todo created");
});
// get all todos
TodoRouter.get("/", async (_req, res) => {
  const todos = await prisma.todo.findMany({
    select: {
      title: true,
      content: true,
      is_complated: true,
    },
    orderBy: { createdAt: "desc" },
  });
  res.send(todos);
});

// delete todo
TodoRouter.delete("/", (req, res) => {
  // delete todo
});

export default TodoRouter;
