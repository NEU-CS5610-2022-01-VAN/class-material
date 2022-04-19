import express from "express";
import pkg from "@prisma/client";
import morgan from "morgan";
import cors from "cors";
import jwt from "express-jwt";
import jwks from "jwks-rsa";

var requireAuth = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: process.env.AUTH0_JWK_URI,
  }),
  audience: process.env.AUTH0_AUDIENCE,
  issuer: process.env.AUTH0_ISSUER,
  algorithms: ["RS256"],
});

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev"));

const { PrismaClient } = pkg;
const prisma = new PrismaClient();

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.get("/todos", requireAuth, async (req, res) => {
  const auth0Id = req.user.sub;

  const user = await prisma.user.findUnique({
    where: {
      auth0Id,
    },
  });

  const posts = await prisma.todoItem.findMany({
    where: {
      authorId: user.id,
    },
  });

  res.json(posts);
});

// creates a todo item
app.post("/todos", requireAuth, async (req, res) => {
  const auth0Id = req.user.sub;
  const user = await prisma.user.findUnique({
    where: {
      auth0Id,
    },
  });

  const { title } = req.body;
  const newItem = await prisma.todoItem.create({
    data: {
      title,
      author: { connect: { auth0Id } },
    },
  });

  res.status(201).json(newItem);
});

// deletes a todo item by id
app.delete("/todos/:id", requireAuth, async (req, res) => {
  const id = req.params.id;
  const deletedItem = await prisma.todoItem.delete({
    where: {
      id,
    },
  });
  res.json(deletedItem);
});

// get a todo item by id
app.get("/todos/:id", requireAuth, async (req, res) => {
  const id = req.params.id;
  const todoItem = await prisma.todoItem.findUnique({
    where: {
      id,
    },
  });
  res.json(todoItem);
});

// updates a todo item by id
app.put("/todos/:id", requireAuth, async (req, res) => {
  const id = req.params.id;
  const { title } = req.body;
  const updatedItem = await prisma.todoItem.update({
    where: {
      id,
    },
    data: {
      title,
    },
  });
  res.json(updatedItem);
});

// get Profile information of authenticated user
app.get("/me", requireAuth, async (req, res) => {
  const auth0Id = req.user.sub;

  const user = await prisma.user.findUnique({
    where: {
      auth0Id,
    },
  });

  res.json(user);
});

// verify user status, if not registered in our database we will create it
app.post("/verify-user", requireAuth, async (req, res) => {
  const auth0Id = req.user.sub;
  const email = req.user[`${process.env.AUTH0_AUDIENCE}/email`];
  const name = req.user[`${process.env.AUTH0_AUDIENCE}/name`];

  const user = await prisma.user.findUnique({
    where: {
      auth0Id,
    },
  });

  if (user) {
    res.json(user);
  } else {
    const newUser = await prisma.user.create({
      data: {
        email,
        auth0Id,
        name,
      },
    });

    res.json(newUser);
  }
});

app.listen(8000, () => {
  console.log("Server running on http://localhost:8000 🎉 🚀");
});
