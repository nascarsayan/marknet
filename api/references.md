Boilerplate setup: https://blog.logrocket.com/how-to-set-up-node-typescript-express/
Add prisma: https://www.prisma.io/docs/getting-started/setup-prisma/add-to-existing-project/mongodb-typescript-mongodb

Get a mongodb atlas cluster.
Prisma requires a mongodb cluster deployed as a replica set, which is not available in railway.app.
So, we need to use mongodb atlas.

Manual Step: Go to https://cloud.mongodb.com/, follow the steps to create a new cluster. It does not require any credit card, and though the cloud provider shows a charge, it is free for development purposes.

using CLI:
Install atlas cli: https://www.mongodb.com/docs/atlas/cli/stable/install-atlas-cli/
Run `atlas setup` command.
In the logs you will see:
Database User Username: username
Database User Password: password
Connecting to: mongodb+srv://<credentials>@cluster68244.uf0wh1g.mongodb.net/?appName=mongosh+1.8.2
Think of some name for the collection, eg: marknet-db

So, the final connection string will be:
mongodb+srv://username:password@cluster68244.uf0wh1g.mongodb.net/marknet-db

Now, we need to add this connection string to the .env

After this, run:

```sh
npx prisma generate
npx prisma db push
ts-node seed/init.ts
```
