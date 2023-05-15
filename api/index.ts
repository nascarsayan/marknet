import express from "express";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

dotenv.config();

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});

app.get("/api/top-lists", async (req, res) => {
  const { q, limit } = req.query;
  if (q !== undefined && typeof q !== "string") {
    res.status(400).send("Invalid value for for query parameter q");
    return;
  }
  let lim = 10;
  if (typeof limit === "string") {
    lim = parseInt(limit);
  } else if (limit !== undefined) {
    res.sendStatus(400);
    return;
  }
  const curatedList = await prisma.curatedList.findMany({
    where: {
      OR: [
        {
          name: {
            contains: q,
            mode: "insensitive",
          },
        },
        {
          bookmarks: {
            some: {
              description: {
                contains: q,
                mode: "insensitive",
              },
            },
          },
        },
      ],
    },
    take: lim,
    orderBy: [
      {
        upvotes: {
          _count: "desc",
        },
      },
      {
        bookmarks: {
          _count: "desc",
        },
      },
    ],
    include: {
      _count: {
        select: {
          upvotes: true,
          bookmarks: true,
        },
      },
      bookmarks: true,
      user: {
        select: {
          username: true,
        },
      },
    },
  });
  res.json(curatedList);
});

app.get("/api/top-marked", async (req, res) => {
  const { q, limit } = req.query;
  if (q !== undefined && typeof q !== "string") {
    res.status(400).send("Invalid value for for query parameter q");
    return;
  }
  let lim = 10;
  if (typeof limit === "string") {
    lim = parseInt(limit);
  } else if (limit !== undefined) {
    res.sendStatus(400);
    return;
  }
  const urls = await prisma.uRL.findMany({
    where: {
      bookmarks: {
        some: {
          description: {
            contains: q,
            mode: "insensitive",
          },
        },
      },
    },
    take: lim,
    orderBy: [
      {
        bookmarks: {
          _count: "desc",
        },
      },
    ],
    include: {
      _count: {
        select: {
          bookmarks: true,
        },
      },
      bookmarks: true,
    },
  });
  res.json(urls);
});

