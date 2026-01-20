import { prisma } from "../lib/prisma";

async function main() {
  try {
    const totalCount = await (prisma.song as any).count();
    const approvedCount = await (prisma.song as any).count({ where: { isApproved: true } });
    const unapprovedCount = await (prisma.song as any).count({ where: { isApproved: false } });

    console.log(`Total songs: ${totalCount}`);
    console.log(`Approved songs: ${approvedCount}`);
    console.log(`Unapproved songs: ${unapprovedCount}`);
  } catch (error) {
    console.error("Error connecting to database:", error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
