import type {PrismaClient} from "@prisma/client";

export default async function ArchetypeSeeder(prisma: PrismaClient) {
  await prisma.archetype.create({
    data: { name: 'Aggro' }
  })

  await prisma.archetype.create({
    data: { name: 'Midrange' }
  })

  await prisma.archetype.create({
    data: { name: 'Control' }
  })
}
