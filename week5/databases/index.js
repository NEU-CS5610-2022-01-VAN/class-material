import express from "express";
import pkg from "@prisma/client";
import morgan from "morgan";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

app.get("/todos", async (req, res) => {
  const posts = await prisma.todoItem.findMany({
    where: {
      author: {
        email: "cristian.penarrieta@gmail.com",
      },
    },
  });
  res.json(posts);
});

app.post("/todo", async (req, res) => {
  const { title, authorEmail } = req.body;
  const todoItem = await prisma.todoItem.create({
    data: {
      title,
      author: { connect: { email: authorEmail } },
    },
  });
  res.json(todoItem);
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000 🎉 🚀");
});
