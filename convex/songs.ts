// convex/songs.ts
import { query, mutation } from "./_generated/server";
import { v } from "convex/values";

// Return all songs
export const list = query({
  args: {},
  handler: async (ctx) => {
    return await ctx.db.query("songs").collect();
  },
});

// Get a single song by id
export const getById = query({
  args: { id: v.number() },
  handler: async (ctx, { id }) => {
    const songs = await ctx.db.query("songs").collect();
    return songs.find((s) => s.id === id);
  },
});

// Add a new song
export const add = mutation({
  args: {
    song: v.object({
      id: v.number(),
      title: v.string(),
      year: v.number(),
      artist: v.string(),
      country: v.string(),
      genre: v.string(),
    }),
  },
  handler: async (ctx, { song }) => {
    return await ctx.db.insert("songs", song);
  },
});
