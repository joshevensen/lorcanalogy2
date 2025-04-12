import {Prisma, PrismaClient} from "@prisma/client";
import SetCreateInput = Prisma.SetCreateInput;
import {Sets} from "../seeders/data/sets";

export default async function setSeeder(prisma: PrismaClient) {
  for (const set of Sets) {
    const newSet: SetCreateInput = {
      id: Number(set.code),
      name: set.name,
      released_at: set.released_at
    }

    await prisma.set.upsert({
      where: {name: set.name},
      update: {},
      create: newSet,
    })
  }
}
