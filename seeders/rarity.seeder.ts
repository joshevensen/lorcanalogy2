import {Prisma, PrismaClient} from "@prisma/client";
import RarityCreateInput = Prisma.RarityCreateInput;
import {findOrCreateRarity} from "../lib/models";

export default async function raritySeeder(prisma: PrismaClient) {
  const rarities: RarityCreateInput[] = [
    {name: 'Common'},
    {name: 'Uncommon'},
    {name: 'Rare'},
    {name: 'Super Rare'},
    {name: 'Legendary'},
    {name: 'Enchanted'},
  ]

  for (const rarity of rarities) {
    await findOrCreateRarity(prisma, rarity.name)
  }
}
