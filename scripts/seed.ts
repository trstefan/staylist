import { prisma } from '../lib/prisma';
import { placeholderSongs } from './placeholderData.js';

async function main() {
  console.log('Start seeding...');
  
  for (const song of placeholderSongs) {
    const { id, createdAt, ...songData } = song;
    const result = await prisma.song.create({
      data: {
        ...songData,
        createdAt: new Date(createdAt),
      },
    });
    console.log(`Created song: ${result.title} by ${result.artist}`);
  }
  
  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
