import type {PrismaClient} from "@prisma/client";

export default async function CollectionSeeder(prisma: PrismaClient, user_id: number) {
  const allCards = await prisma.card.findMany();

  for (const card of allCards) {
    await prisma.collection.upsert({
      where: {
        id: {
          card_id: card.id,
          user_id: user_id
        }
      },
      update: {},
      create: {
        card_id: card.id,
        user_id: user_id,
      }
    })
  }
}
