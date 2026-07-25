import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const DEMO_USER_ID = '11111111-1111-1111-1111-111111111111';

async function main() {
  const demoUser = await prisma.user.upsert({
    where: { id: DEMO_USER_ID },
    update: {},
    create: {
      id: DEMO_USER_ID,
      name: 'Demo Citizen',
      email: 'demo@civicpulse.local',
      role: 'CITIZEN',
    },
  });

  console.log(`✅ Seeded demo user: ${demoUser.name} (${demoUser.id})`);

  const existingIssues = await prisma.issue.count();
  if (existingIssues === 0) {
    await prisma.issue.create({
      data: {
        title: 'Unlit Alley Near Campus Gate (Unsafe at Night)',
        description: 'The alley behind the main campus gate has no working streetlights. Needs 2 LED floodlights and a volunteer electrician for installation.',
        category: 'LIGHTING',
        latitude: 28.6139,
        longitude: 77.209,
        address: 'Ward 12, Raj Nagar Main Gate',
        imageUrlBefore: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09',
        targetAmount: 1200,
        reporterId: demoUser.id,
      },
    });
    console.log('✅ Seeded one sample issue for the feed');
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
