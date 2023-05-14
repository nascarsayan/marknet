import {
  PrismaClient,
  Tag,
  URL,
  UserAccount,
  Bookmark,
  CuratedList,
} from "@prisma/client";
import {
  TagsToCreate,
  BookMarksToCreate as FlattenedBookmarks,
  UsersToCreate,
} from "./db";

const prisma = new PrismaClient();

async function main() {
  await prisma.$connect();
  console.log("Connected to DB");
  const tags: Record<string, Tag> = {};
  for (let t of TagsToCreate) {
    let tag = await prisma.tag.upsert({
      where: {
        name: t,
      },
      update: {
        name: t,
      },
      create: {
        name: t,
      },
    });
    tags[t] = tag;
  }
  console.log("Created Tags");

  const urls: Record<string, URL> = {};
  for (let b of FlattenedBookmarks) {
    let url = await prisma.uRL.upsert({
      where: {
        url: b.url,
      },
      update: {
        url: b.url,
      },
      create: {
        url: b.url,
      },
    });
    urls[b.url] = url;
  }
  console.log("Created URLs");

  const users: Record<string, UserAccount> = {};
  for (let u of UsersToCreate) {
    let user = await prisma.userAccount.upsert({
      where: {
        username: u.username,
      },
      update: {
        name: u.name,
      },
      create: {
        name: u.name,
        username: u.username,
      },
    });
    users[u.username] = user;
  }
  console.log("Created Users");

  // Map<User, Map<URL, Bookmark>>
  const bookmarks: Record<string, Record<string, Bookmark>> = {};
  for (let b of FlattenedBookmarks) {
    let descIdx = 0;
    let tagIdx = 0;
    for (let u of UsersToCreate) {
      let t = TagsToCreate[tagIdx];
      let d = b.descriptions[descIdx];
      let bookmark = await prisma.bookmark.upsert({
        where: {
          userId_urlId: {
            userId: users[u.username].id,
            urlId: urls[b.url].id,
          },
        },
        update: {
          description: d,
        },
        create: {
          description: d,
          url: {
            connect: {
              id: urls[b.url].id,
            },
          },
          tags: {
            connect: {
              id: tags[t].id,
            },
          },
          user: {
            connect: {
              id: users[u.username].id,
            },
          },
        },
      });
      bookmarks[u.username] = bookmarks[u.username] || {};
      bookmarks[u.username][b.url] = bookmark;
      tagIdx = (tagIdx + 1) % UsersToCreate.length;
      descIdx = (descIdx + 1) % b.descriptions.length;
    }
  }
  console.log("Created Bookmarks");

  // Map<CuratedListName, Map<User, CuratedList>>
  const curatedLists: Record<string, Record<string, CuratedList>> = {};
  let userIdx = 0;
  for (let t of TagsToCreate) {
    let u = UsersToCreate[userIdx];
    let urlIdcs: string[] = [];
    for (let b of FlattenedBookmarks) {
      if (b.tags.includes(t)) {
        urlIdcs.push(b.url);
      }
    }
    if (urlIdcs.length < 2) {
      continue;
    }
    let curatedList = await prisma.curatedList.upsert({
      where: {
        name_userId: {
          name: t,
          userId: users[u.username].id,
        },
      },
      update: {
        name: t,
      },
      create: {
        name: t,
        user: {
          connect: {
            id: users[u.username].id,
          },
        },
        bookmarks: {
          connect: urlIdcs.map((urlId) => ({
            userId_urlId: {
              userId: users[u.username].id,
              urlId: urls[urlId].id,
            },
          })),
        },
      },
    });

    curatedLists[t] = curatedLists[t] || {};
    curatedLists[t][u.username] = curatedList;
    userIdx = (userIdx + 1) % UsersToCreate.length;
  }
  console.log("Created CuratedLists");

  let userToIdx: Record<string, number> = {};
  for (let i = 0; i < UsersToCreate.length; i++) {
    userToIdx[UsersToCreate[i].username] = i;
  }
  // Upvotes
  for (let t of TagsToCreate) {
    if (!curatedLists[t]) {
      continue;
    }
    for (let creator in curatedLists[t]) {
      let curatedList = curatedLists[t][creator];
      if (!curatedList || curatedList.bookmarkIDs.length < 2) {
        continue;
      }
      let creatorIdx = userToIdx[creator];
      let upvoterIdx = (creatorIdx + 1) % UsersToCreate.length;
      let upvoter = UsersToCreate[upvoterIdx];
      await prisma.upvote.upsert({
        where: {
          userId_curatedListId: {
            userId: users[creator].id,
            curatedListId: curatedList.id,
          },
        },
        update: {},
        create: {
          user: {
            connect: {
              id: users[upvoter.username].id,
            },
          },
          curatedList: {
            connect: {
              id: curatedList.id,
            },
          },
        },
      });
    }
  }
  console.log("Created Upvotes");
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
