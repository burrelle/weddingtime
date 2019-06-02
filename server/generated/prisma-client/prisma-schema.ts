// Code generated by Prisma (prisma@1.34.0). DO NOT EDIT.
  // Please don't change this file manually but run `prisma generate` to update it.
  // For more information, please read the docs: https://www.prisma.io/docs/prisma-client/

export const typeDefs = /* GraphQL */ `type AggregateGuest {
  count: Int!
}

type AggregateRSVP {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type BatchPayload {
  count: Long!
}

type Guest {
  id: ID!
  forename: String!
  surname: String!
  attending: Boolean!
  rsvp: RSVP!
}

type GuestConnection {
  pageInfo: PageInfo!
  edges: [GuestEdge]!
  aggregate: AggregateGuest!
}

input GuestCreateInput {
  id: ID
  forename: String!
  surname: String!
  attending: Boolean
  rsvp: RSVPCreateOneWithoutGuestsInput!
}

input GuestCreateManyWithoutRsvpInput {
  create: [GuestCreateWithoutRsvpInput!]
  connect: [GuestWhereUniqueInput!]
}

input GuestCreateWithoutRsvpInput {
  id: ID
  forename: String!
  surname: String!
  attending: Boolean
}

type GuestEdge {
  node: Guest!
  cursor: String!
}

enum GuestOrderByInput {
  id_ASC
  id_DESC
  forename_ASC
  forename_DESC
  surname_ASC
  surname_DESC
  attending_ASC
  attending_DESC
}

type GuestPreviousValues {
  id: ID!
  forename: String!
  surname: String!
  attending: Boolean!
}

input GuestScalarWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  forename: String
  forename_not: String
  forename_in: [String!]
  forename_not_in: [String!]
  forename_lt: String
  forename_lte: String
  forename_gt: String
  forename_gte: String
  forename_contains: String
  forename_not_contains: String
  forename_starts_with: String
  forename_not_starts_with: String
  forename_ends_with: String
  forename_not_ends_with: String
  surname: String
  surname_not: String
  surname_in: [String!]
  surname_not_in: [String!]
  surname_lt: String
  surname_lte: String
  surname_gt: String
  surname_gte: String
  surname_contains: String
  surname_not_contains: String
  surname_starts_with: String
  surname_not_starts_with: String
  surname_ends_with: String
  surname_not_ends_with: String
  attending: Boolean
  attending_not: Boolean
  AND: [GuestScalarWhereInput!]
  OR: [GuestScalarWhereInput!]
  NOT: [GuestScalarWhereInput!]
}

type GuestSubscriptionPayload {
  mutation: MutationType!
  node: Guest
  updatedFields: [String!]
  previousValues: GuestPreviousValues
}

input GuestSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: GuestWhereInput
  AND: [GuestSubscriptionWhereInput!]
  OR: [GuestSubscriptionWhereInput!]
  NOT: [GuestSubscriptionWhereInput!]
}

input GuestUpdateInput {
  forename: String
  surname: String
  attending: Boolean
  rsvp: RSVPUpdateOneRequiredWithoutGuestsInput
}

input GuestUpdateManyDataInput {
  forename: String
  surname: String
  attending: Boolean
}

input GuestUpdateManyMutationInput {
  forename: String
  surname: String
  attending: Boolean
}

input GuestUpdateManyWithoutRsvpInput {
  create: [GuestCreateWithoutRsvpInput!]
  delete: [GuestWhereUniqueInput!]
  connect: [GuestWhereUniqueInput!]
  set: [GuestWhereUniqueInput!]
  disconnect: [GuestWhereUniqueInput!]
  update: [GuestUpdateWithWhereUniqueWithoutRsvpInput!]
  upsert: [GuestUpsertWithWhereUniqueWithoutRsvpInput!]
  deleteMany: [GuestScalarWhereInput!]
  updateMany: [GuestUpdateManyWithWhereNestedInput!]
}

input GuestUpdateManyWithWhereNestedInput {
  where: GuestScalarWhereInput!
  data: GuestUpdateManyDataInput!
}

input GuestUpdateWithoutRsvpDataInput {
  forename: String
  surname: String
  attending: Boolean
}

input GuestUpdateWithWhereUniqueWithoutRsvpInput {
  where: GuestWhereUniqueInput!
  data: GuestUpdateWithoutRsvpDataInput!
}

input GuestUpsertWithWhereUniqueWithoutRsvpInput {
  where: GuestWhereUniqueInput!
  update: GuestUpdateWithoutRsvpDataInput!
  create: GuestCreateWithoutRsvpInput!
}

input GuestWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  forename: String
  forename_not: String
  forename_in: [String!]
  forename_not_in: [String!]
  forename_lt: String
  forename_lte: String
  forename_gt: String
  forename_gte: String
  forename_contains: String
  forename_not_contains: String
  forename_starts_with: String
  forename_not_starts_with: String
  forename_ends_with: String
  forename_not_ends_with: String
  surname: String
  surname_not: String
  surname_in: [String!]
  surname_not_in: [String!]
  surname_lt: String
  surname_lte: String
  surname_gt: String
  surname_gte: String
  surname_contains: String
  surname_not_contains: String
  surname_starts_with: String
  surname_not_starts_with: String
  surname_ends_with: String
  surname_not_ends_with: String
  attending: Boolean
  attending_not: Boolean
  rsvp: RSVPWhereInput
  AND: [GuestWhereInput!]
  OR: [GuestWhereInput!]
  NOT: [GuestWhereInput!]
}

input GuestWhereUniqueInput {
  id: ID
}

scalar Long

type Mutation {
  createGuest(data: GuestCreateInput!): Guest!
  updateGuest(data: GuestUpdateInput!, where: GuestWhereUniqueInput!): Guest
  updateManyGuests(data: GuestUpdateManyMutationInput!, where: GuestWhereInput): BatchPayload!
  upsertGuest(where: GuestWhereUniqueInput!, create: GuestCreateInput!, update: GuestUpdateInput!): Guest!
  deleteGuest(where: GuestWhereUniqueInput!): Guest
  deleteManyGuests(where: GuestWhereInput): BatchPayload!
  createRSVP(data: RSVPCreateInput!): RSVP!
  updateRSVP(data: RSVPUpdateInput!, where: RSVPWhereUniqueInput!): RSVP
  updateManyRSVPs(data: RSVPUpdateManyMutationInput!, where: RSVPWhereInput): BatchPayload!
  upsertRSVP(where: RSVPWhereUniqueInput!, create: RSVPCreateInput!, update: RSVPUpdateInput!): RSVP!
  deleteRSVP(where: RSVPWhereUniqueInput!): RSVP
  deleteManyRSVPs(where: RSVPWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateManyMutationInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Query {
  guest(where: GuestWhereUniqueInput!): Guest
  guests(where: GuestWhereInput, orderBy: GuestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guest]!
  guestsConnection(where: GuestWhereInput, orderBy: GuestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): GuestConnection!
  rSVP(where: RSVPWhereUniqueInput!): RSVP
  rSVPs(where: RSVPWhereInput, orderBy: RSVPOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [RSVP]!
  rSVPsConnection(where: RSVPWhereInput, orderBy: RSVPOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RSVPConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  node(id: ID!): Node
}

type RSVP {
  id: ID!
  party: String!
  guests(where: GuestWhereInput, orderBy: GuestOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Guest!]
}

type RSVPConnection {
  pageInfo: PageInfo!
  edges: [RSVPEdge]!
  aggregate: AggregateRSVP!
}

input RSVPCreateInput {
  id: ID
  party: String!
  guests: GuestCreateManyWithoutRsvpInput
}

input RSVPCreateOneWithoutGuestsInput {
  create: RSVPCreateWithoutGuestsInput
  connect: RSVPWhereUniqueInput
}

input RSVPCreateWithoutGuestsInput {
  id: ID
  party: String!
}

type RSVPEdge {
  node: RSVP!
  cursor: String!
}

enum RSVPOrderByInput {
  id_ASC
  id_DESC
  party_ASC
  party_DESC
}

type RSVPPreviousValues {
  id: ID!
  party: String!
}

type RSVPSubscriptionPayload {
  mutation: MutationType!
  node: RSVP
  updatedFields: [String!]
  previousValues: RSVPPreviousValues
}

input RSVPSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RSVPWhereInput
  AND: [RSVPSubscriptionWhereInput!]
  OR: [RSVPSubscriptionWhereInput!]
  NOT: [RSVPSubscriptionWhereInput!]
}

input RSVPUpdateInput {
  party: String
  guests: GuestUpdateManyWithoutRsvpInput
}

input RSVPUpdateManyMutationInput {
  party: String
}

input RSVPUpdateOneRequiredWithoutGuestsInput {
  create: RSVPCreateWithoutGuestsInput
  update: RSVPUpdateWithoutGuestsDataInput
  upsert: RSVPUpsertWithoutGuestsInput
  connect: RSVPWhereUniqueInput
}

input RSVPUpdateWithoutGuestsDataInput {
  party: String
}

input RSVPUpsertWithoutGuestsInput {
  update: RSVPUpdateWithoutGuestsDataInput!
  create: RSVPCreateWithoutGuestsInput!
}

input RSVPWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  party: String
  party_not: String
  party_in: [String!]
  party_not_in: [String!]
  party_lt: String
  party_lte: String
  party_gt: String
  party_gte: String
  party_contains: String
  party_not_contains: String
  party_starts_with: String
  party_not_starts_with: String
  party_ends_with: String
  party_not_ends_with: String
  guests_every: GuestWhereInput
  guests_some: GuestWhereInput
  guests_none: GuestWhereInput
  AND: [RSVPWhereInput!]
  OR: [RSVPWhereInput!]
  NOT: [RSVPWhereInput!]
}

input RSVPWhereUniqueInput {
  id: ID
  party: String
}

type Subscription {
  guest(where: GuestSubscriptionWhereInput): GuestSubscriptionPayload
  rSVP(where: RSVPSubscriptionWhereInput): RSVPSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
}

type User {
  id: ID!
  name: String!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  id: ID
  name: String!
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  name_ASC
  name_DESC
}

type UserPreviousValues {
  id: ID!
  name: String!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateInput {
  name: String
}

input UserUpdateManyMutationInput {
  name: String
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
}
`