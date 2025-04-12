import {Prisma, PrismaClient} from "@prisma/client";
import TypeCreateInput = Prisma.TypeCreateInput;
import {findOrCreateType} from "../lib/models";

export default async function typeSeeder(prisma: PrismaClient) {
  const types: TypeCreateInput[] = [
    {name: 'Action'},
    {name: 'Character'},
    {name: 'Item'},
    {name: 'Song'},
    {name: 'Location'},
  ]

  for (const type of types) {
    await findOrCreateType(prisma, type.name)
  }
}
