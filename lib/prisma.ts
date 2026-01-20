import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

declare global {
  var prisma: PrismaClient | undefined;
}

// Create PrismaClient with pg adapter
const createPrismaClient = () => {
  const connectionString = process.env.DATABASE_URL?.trim();
  
  if (!connectionString) {
    console.error("[Prisma] DATABASE_URL is missing!");
    throw new Error("DATABASE_URL is not defined in process.env");
  }
  
  const maskedUrl = connectionString.replace(/:[^:@]+@/, ":****@");
  console.log(`[Prisma] Initializing with pg adapter: ${maskedUrl}`);
  
  const pool = new Pool({ 
    connectionString,
    ssl: connectionString.includes("sslmode=require") ? { rejectUnauthorized: false } : false
  });
  const adapter = new PrismaPg(pool);
  
  return new PrismaClient({
    adapter,
    log: ['error', 'warn', 'info'],
  });
};

export const prisma = globalThis.prisma ?? createPrismaClient();

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = prisma;
}







