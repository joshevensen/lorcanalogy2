import {Prisma, PrismaClient} from "@prisma/client";
import InkCreateInput = Prisma.InkCreateInput;
import {findOrCreateInk} from "../lib/models";

export default async function inkSeeder(prisma: PrismaClient) {
  const inks: InkCreateInput[] = [
    {name: 'Amber'},
    {name: 'Amethyst'},
    {name: 'Emerald'},
    {name: 'Ruby'},
    {name: 'Sapphire'},
    {name: 'Steel'},
  ]

  for (const ink of inks) {
    await findOrCreateInk(prisma, ink.name)
  }
}
