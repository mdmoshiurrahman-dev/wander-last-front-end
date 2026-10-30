import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "@better-auth/mongo-adapter";
import { jwt } from "better-auth/plugins";
const client = new MongoClient(
  "mongodb://wanderlast:DUsBHlxLPXpSdjDa@ac-pfxvjtr-shard-00-00.cq8rony.mongodb.net:27017,ac-pfxvjtr-shard-00-01.cq8rony.mongodb.net:27017,ac-pfxvjtr-shard-00-02.cq8rony.mongodb.net:27017/?ssl=true&replicaSet=atlas-1jk1m3-shard-0&authSource=admin",
);
const db = client.db("wanderlast");
export const auth = betterAuth({
  plugins: [jwt()],
  session: {
    cookieCache: {
      enabled: true,
      strategy: "jwt",
      maxAge: 7 * 24 * 60 * 60, // 7 days
    },
  },
  emailAndPassword: {
    enabled: true,
  },
  baseURL: process.env.BETTER_AUTH_URL,
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    },
  },
  database: mongodbAdapter(db, {
    client,
  }),
});
