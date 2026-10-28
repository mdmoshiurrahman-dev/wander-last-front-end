import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
const client = new MongoClient(
  "mongodb://wanderlast:DUsBHlxLPXpSdjDa@ac-pfxvjtr-shard-00-00.cq8rony.mongodb.net:27017,ac-pfxvjtr-shard-00-01.cq8rony.mongodb.net:27017,ac-pfxvjtr-shard-00-02.cq8rony.mongodb.net:27017/?ssl=true&replicaSet=atlas-1jk1m3-shard-0&authSource=admin",
);
const db = client.db('wanderlast');
export const auth = betterAuth({
  emailAndPassword: {
    enabled: true,
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
