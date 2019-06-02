import { ApolloServer } from "apollo-server";
import { makePrismaSchema } from "nexus-prisma";
import * as path from "path";
import datamodelInfo from "./generated/nexus-prisma";
import { prisma } from "./generated/prisma-client";
import { Mutation } from "./resolvers/Mutation";
import { Query } from "./resolvers/Query";

const schema = makePrismaSchema({
  types: [Query, Mutation],

  prisma: {
    datamodelInfo,
    client: prisma,
  },

  outputs: {
    schema: path.join(__dirname, "./generated/schema.graphql"),
    typegen: path.join(__dirname, "./generated/nexus.ts"),
  },
});

const server = new ApolloServer({
  schema,
  context: {
    prisma,
  },
});

server.listen().then(({ url }) => {
  // tslint:disable-next-line
  console.log(`🚀  Server ready at ${url}`);
});
