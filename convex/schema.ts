// convex/schema.ts
import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  songs: defineTable({
    id: v.number(),
    title: v.string(),
    year: v.number(),
    artist: v.string(),
    country: v.string(),
    genre: v.string(),
  }),
});
