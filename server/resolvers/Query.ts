import { prismaObjectType } from "nexus-prisma";

export const Query = prismaObjectType({
  name: "Query",
  definition(t) {
    t.prismaFields([
      { name: "rSVP", alias: "rsvp" },
      { name: "rSVPs", alias: "rsvps" },
      "guest",
      "guests",
    ]),
      t.list.field("guestsAttending", {
        type: "Guest",
        resolve: (root, args, context) =>
          context.prisma.guests({ where: { attending: true } }),
      }),
      t.list.field("guestsNotAttending", {
        type: "Guest",
        resolve: (root, args, context) =>
          context.prisma.guests({ where: { attending: false } }),
      });
  },
});
