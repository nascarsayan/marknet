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

app.get("/api/lists/top", async (req, res) => {
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

app.get("/api/urls/top", async (req, res) => {
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

app.put("/api/lists/:id/upvote", async (req, res) => {
  const { id } = req.params;
  const { userId } = req.query;
  if (typeof userId !== "string") {
    res.status(400).send("Invalid value for for query parameter userId");
    return;
  }
  if (typeof id !== "string") {
    res.status(400).send("Invalid value for for  id");
    return;
  }
  // check if a curated list with id exists
  const curatedList = await prisma.curatedList.findUnique({
    where: {
      id,
    },
  });
  if (curatedList === null) {
    res.status(404).send(`No curated list with given id: ${id}`);
    return;
  }
  // check if user exists
  const user = await prisma.userAccount.findUnique({
    where: {
      id: userId,
    },
  });
  if (user === null) {
    res.status(404).send(`No user with given id: ${userId}`);
    return;
  }

  // upvote the curated list
  await prisma.upvote.upsert({
    where: {
      userId_curatedListId: {
        curatedListId: id,
        userId: userId,
      },
    },
    update: {},
    create: {
      curatedListId: id,
      userId: userId,
    },
  });
  res.sendStatus(200);
});

app.delete("/api/lists/:id/upvote", async (req, res) => {
  const { id } = req.params;
  const { userId } = req.query;
  if (typeof userId !== "string") {
    res.status(400).send("Invalid value for for query parameter userId");
    return;
  }
  if (typeof id !== "string") {
    res.status(400).send("Invalid value for for  id");
    return;
  }
  // check if a curated list with id exists
  const curatedList = await prisma.curatedList.findUnique({
    where: {
      id,
    },
  });
  if (curatedList === null) {
    res.status(404).send(`No curated list with given id: ${id}`);
    return;
  }
  // check if user exists
  const user = await prisma.userAccount.findUnique({
    where: {
      id: userId,
    },
  });
  if (user === null) {
    res.status(404).send(`No user with given id: ${userId}`);
    return;
  }

  // delete the upvote
  await prisma.upvote.delete({
    where: {
      userId_curatedListId: {
        curatedListId: id,
        userId: userId,
      },
    },
  });
  res.sendStatus(200);
});

app.get("/api/bookmarks/:id", async (req, res) => {
  const { id } = req.params;
  if (typeof id !== "string") {
    res.status(400).send("Invalid value for for  id");
    return;
  }
  const bookmark = await prisma.bookmark.findUnique({
    where: {
      id,
    },
  });
  if (bookmark === null) {
    res.status(404).send(`No bookmark with given id: ${id}`);
    return;
  }
  res.json(bookmark);
});

app.patch("/api/bookmarks/:id", async (req, res) => {
  const { id } = req.params;
  const { description, userId } = req.body;
  if (typeof id !== "string") {
    res.status(400).send("Invalid value for for  id");
    return;
  }
  if (typeof description !== "string") {
    res.status(400).send("Invalid value for for  description");
    return;
  }
  if (typeof userId !== "string") {
    res.status(400).send("Invalid value for for  userId");
    return;
  }
  const bookmark = await prisma.bookmark.update({
    where: {
      id,
    },
    data: {
      description,
      user: {
        connect: {
          id: userId,
        },
      },
    },
  });
  res.json(bookmark);
});

app.delete("/api/bookmarks/:id", async (req, res) => {
  const { id } = req.params;
  if (typeof id !== "string") {
    res.status(400).send("Invalid value for for  id");
    return;
  }
  const bookmark = await prisma.bookmark.findUnique({
    where: {
      id,
    },
  });
  if (bookmark === null) {
    res.status(200).send(`No bookmark with given id: ${id}`);
    return;
  }
  await prisma.bookmark.delete({
    where: {
      id,
    },
  });
  res.sendStatus(200);
});

app.get("/api/bookmarks", async (req, res) => {
  const { q, limit, userId } = req.query;
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
  if (typeof userId !== "string") {
    res.status(400).send("Invalid value for for query parameter userId");
    return;
  }
  const bookmarks = await prisma.bookmark.findMany({
    where: {
          description: {
            contains: q,
            mode: "insensitive",
          },
          userId: userId,
    },
    take: lim,
  });
  res.json(bookmarks);
});

app.post("/api/bookmarks", async (req, res) => {
  const { url, description, userId } = req.body;
  if (typeof url !== "string") {
    res.status(400).send("Invalid value for for url");
    return;
  }
  if (typeof description !== "string") {
    res.status(400).send("Invalid value for for description");
    return;
  }
  if (typeof userId !== "string") {
    res.status(400).send("Invalid value for for userId");
    return;
  }
  
  // Upsert url
  const urlObj = await prisma.uRL.upsert({
    where: {
      url,
    },
    update: {},
    create: {
      url,
    },
  });

  // Upsert bookmark
  const bookmark = await prisma.bookmark.upsert({
    where: {
      userId_urlId: {
        urlId: urlObj.id,
        userId: userId,
      },
    },
    update: {
      description,
    },
    create: {
      description,
      urlId: urlObj.id,
      userId: userId,
    },
  });
  res.json(bookmark);
});
