export const TagsToCreate = [
  "Programming",
  "Javascript",
  "Typescript",
  "Fullstack",
  "Frontend",
  "Backend",
  "Database",
  "Node.js",
  "Cloud",
  "Blog",
  "Music",
  "Podcast",
  "Interesting Products",
  "Math",
];

export const BookMarksToCreate = [
  {
    url: "https://stackblitz.com",
    tags: ["Fullstack", "Frontend", "Backend", "Interesting Products"],
    descriptions: [
      "Online IDE for web applications powered by Visual Studio Code",
      "Build fullstack web apps, collaboratively",
      "Build, share, and run your projects with a single click.",
      "You can develop your backend and frontend without having to install anything on your machine.",
      "You can collaborate with others in real-time.",
    ],
  },
  {
    url: "https://vercel.com",
    tags: ["Fullstack", "Frontend", "Backend", "Cloud", "Interesting Products"],
    descriptions: [
      "Develop. Preview. Ship.",
      "The best way to deploy your Next.js sites and apps",
      "Vercel combines the best developer experience with an obsessive focus on end-user performance.",
      "Vercel is the best place to deploy any frontend app.",
      "Start by deploying with zero configuration to our global edge network.",
      "Scale dynamically to millions of pages without breaking a sweat.",
    ],
  },
  {
    url: "https://prisma.io",
    tags: ["Database", "Interesting Products"],
    descriptions: [
      "Prisma is a next-generation ORM for Node.js and TypeScript.",
      "Prisma replaces traditional ORMs and can be used to build GraphQL servers, REST APIs, microservices & more.",
      "Prisma makes it easy to implement GraphQL servers. It replaces traditional ORMs and simplifies database workflows.",
      "Prisma is an open-source database toolkit. It replaces traditional ORMs and makes database access easy with an auto-generated query builder for TypeScript & Node.js.",
      "Prisma is a next-generation ORM for Node.js and TypeScript. It makes it easy to build GraphQL servers, REST APIs & more.",
    ],
  },
  {
    url: "https://create.t3.gg",
    tags: ["Fullstack", "Frontend", "Backend", "Interesting Products"],
    descriptions: [
      "Create a fullstack app in seconds",
      "T3 is a fullstack app generator that uses next.js, nextauth, tRPC, and Prisma and tailwindcss",
      "Full form of t3 is tRPC, Tailwind, Typescript",
    ],
  },
  {
    url: "https://pris.ly/d/document-database-many-to-many",
    tags: ["Database"],
    descriptions: [
      "Prisma is a next-generation ORM for Node.js and TypeScript.",
      "All the features of relational databases are not supported for MongoDB by Prisma.",
      "For many-to-many relationships, Prisma needs extra columns to store the relationship.",
    ],
  },
  {
    url: "https://tailwindcss.com/docs/guides/vite",
    tags: ["Frontend", "Interesting Products"],
    descriptions: [
      "Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override.",
      "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.",
      "This guide shows how to use Tailwind CSS with Vite.",
    ],
  },
  {
    url: "https://vitejs.dev",
    tags: ["Frontend", "Interesting Products"],
    descriptions: [
      "Vite is a build tool that aims to provide a faster and leaner development experience for modern web projects.",
      "It consists of two major parts.",
      "A dev server that serves your source files over native ES modules, with rich built-in features and astonishingly fast Hot Module Replacement (HMR).",
      "A build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.",
    ],
  },
  {
    url: "https://esbuild.github.io",
    tags: ["Frontend", "Interesting Products"],
    descriptions: [
      "An extremely fast JavaScript bundler and minifier",
      "esbuild is a JavaScript bundler and minifier written in Go. It packages up JavaScript and TypeScript code for distribution on the web.",
    ],
  },
  {
    url: "https://www.mongodb.com",
    tags: ["Database"],
    descriptions: [
      "MongoDB is a general purpose, document-based, distributed database built for modern application developers and for the cloud era.",
      "MongoDB is a document database, which means it stores data in JSON-like documents.",
      "We believe this is the most natural way to think about data, and is much more expressive and powerful than the traditional row/column model.",
      "Documents in MongoDB are BSON (Binary JSON) documents, which are JSON objects with a binary representation.",
      "MongoDB is a distributed database at its core, so high availability, horizontal scaling, and geographic distribution are built in and easy to use.",
      "MongoDB is free to use. Versions released prior to October 16, 2018 are published under the AGPL.",
    ],
  },
  {
    url: "https://www.postgresql.org",
    tags: ["Database"],
    descriptions: [
      "PostgreSQL is a powerful, open source object-relational database system with over 35 years of active development that has earned it a strong reputation for reliability, feature robustness, and performance.",
      "There is a wealth of information to be found describing how to install and use PostgreSQL through the official documentation.",
      "The PostgreSQL community provides many helpful places to become familiar with the technology, discover how it works, and find career opportunities.",
    ],
  },
  {
    url: "https://www.mysql.com",
    tags: ["Database"],
    descriptions: [
      "MySQL is the world's most popular open source database.",
      "Whether you are a fast growing web property, technology ISV or large enterprise, MySQL can cost-effectively help you deliver high performance, scalable database applications.",
      "MySQL Community Edition is the freely downloadable version of the world's most popular open source database.",
      "MySQL Cluster Community Edition is available as a separate download.",
      "The reason for this change is so that MySQL Cluster can provide more frequent updates and support using the latest sources of MySQL Cluster Carrier Grade Edition.",
      "MySQL Cluster is a real-time open source transactional database designed for fast, always-on access to data under high throughput conditions.",
    ],
  },
  {
    url: "https://redis.io",
    tags: ["Database"],
    descriptions: [
      "Redis is an open source (BSD licensed), in-memory data structure store, used as a database, cache, and message broker.",
      "It supports data structures such as strings, hashes, lists, sets, sorted sets with range queries, bitmaps, hyperloglogs, geospatial indexes with radius queries and streams.",
      "Redis has built-in replication, Lua scripting, LRU eviction, transactions and different levels of on-disk persistence, and provides high availability via Redis Sentinel and automatic partitioning with Redis Cluster.",
      "You can use Redis from most programming languages also.",
    ],
  },
  {
    url: "https://www.sqlite.org/index.html",
    tags: ["Database"],
    descriptions: [
      "SQLite is a C-language library that implements a small, fast, self-contained, high-reliability, full-featured, SQL database engine.",
      "SQLite is the most used database engine in the world.",
      "SQLite is built into all mobile phones and most computers and comes bundled inside countless other applications that people use every day.",
      "SQLite is an embedded SQL database engine.",
      "Unlike most other SQL databases, SQLite does not have a separate server process.",
      "SQLite reads and writes directly to ordinary disk files.",
      "A complete SQL database with multiple tables, indices, triggers, and views, is contained in a single disk file.",
      "The database file format is cross-platform - you can freely copy a database between 32-bit and 64-bit systems or between big-endian and little-endian architectures.",
      "These features make SQLite a popular choice as an Application File Format.",
      "Think of SQLite not as a replacement for Oracle but as a replacement for fopen()",
    ],
  },
  {
    url: "https://world.hey.com/dhh",
    tags: ["Blog"],
    descriptions: [
      "David Heinemeier Hannison is the creator of Ruby on Rails and founder of Basecamp.",
      "He is also the author of several books including REWORK, REMOTE, and It Doesn't Have to be Crazy at Work.",
      "He writes about the web, programming, business, and more.",
      "He is a passionate enthusiast of classic Mercedes-Benz cars and an avid reader of books.",
      "He is the founder of HEY, a new email service.",
    ],
  },
  {
    url: "https://perell.com/",
    tags: ["Blog"],
    descriptions: [
      "David Perell is a writer, podcaster, and founder of the online writing school, Write of Passage.",
      "He is the host of the North Star Podcast, and has taught writing at Harvard, Yale, and INSEAD.",
      "He has been featured in The New York Times, The Washington Post, and The Wall Street Journal.",
      "He writes about writing, online courses, and travel.",
    ],
  },
  {
    url: "https://zserge.com/",
    tags: ["Blog"],
    descriptions: [
      "Serge Zaitsev is a software engineer, creator of Micro editor, and author of many articles about programming.",
      "He writes about programming, software engineering, and more.",
    ],
  },
  {
    url: "http://www.paulgraham.com/articles.html",
    tags: ["Blog"],
    descriptions: [
      "Paul Graham is an English-born American computer scientist, entrepreneur, venture capitalist, author, and essayist.",
      "He is best known for his work on Lisp, his former startup Viaweb (later renamed Yahoo! Store), co-founding the influential startup accelerator and seed capital firm Y Combinator, his blog, and Hacker News.",
      "He is the author of On Lisp (1993), ANSI Common Lisp (1995), and Hackers & Painters (2004).",
      "He has written many essays, the best known of which is probably A Plan for Spam, in which he identified spam as a problem to be solved by statistical means.",
      "He gave a talk at the startup school at Stanford University where he discussed his life as a programmer and his perspective on Lisp.",
      "Graham published his first book of essays, called Hackers & Painters: Big Ideas from the Computer Age, which explains how the hacker subculture originated and argues for the hacker mindset.",
      "Graham, along with Jessica Livingston, co-founded the Y Combinator Research to fund long-term fundamental research.",
      "Graham and Jessica Livingston received the TechCrunch Include Award for their work on diversity.",
      "Graham has been called an 'essayist, programmer, and investor'.",
    ],
  },
  {
    url: "https://pavpanchekha.com/blog.html",
    tags: ["Blog", "Programming", "Math"],
    descriptions: [
      "Pavel Panchekha is a PhD student at the University of Utah.",
      "He writes about programming languages, formal verification, and more.",
    ],
  },
  {
    url: "https://andrewkelley.me/",
    tags: ["Blog", "Programming"],
    descriptions: [
      "Andrew Kelley is a software engineer at Google.",
      "He writes about programming languages, compilers, and more.",
      "He is the creator of Zig programming language.",
    ],
  },
  {
    url: "https://web.archive.org/web/20160615115504/http://chris-taylor.github.io/",
    tags: ["Blog", "Programming", "Math"],
    descriptions: [
      "Chris tailor talks about programming, math, and more.",
      "He is best known for his blog post on Algebraic Data Types in Haskell.",
    ],
  },
  {
    url: "https://visualpde.com/basic-pdes",
    tags: ["Math"],
    descriptions: [
      "Visual PDE is a website that visualizes partial differential equations.",
      "It is a great resource for learning about PDEs.",
    ],
  },
  {
    url: "http://radio.garden/",
    tags: ["Music"],
    descriptions: [
      "Radio Garden is a website that allows you to listen to radio stations from around the world.",
      "It is a great resource for discovering new music.",
    ],
  },
];

export const UsersToCreate = [
  {
    name: "John Doe",
    username: "johndoe",
  },
  {
    name: "Jane Doe",
    username: "janedoe",
  },
  {
    name: "John Smith",
    username: "johnsmith",
  },
  {
    name: "Billy Bob",
    username: "billybob",
  },
  {
    name: "Joe Bloggs",
    username: "joebloggs",
  },
  {
    name: "Jane Bloggs",
    username: "janebloggs",
  },
];
