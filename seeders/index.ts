import {PrismaClient} from "@prisma/client";
import raritySeeder from "./rarity.seeder";
import inkSeeder from "./ink.seeder";
import setSeeder from "./set.seeder";
import typeSeeder from "./type.seeder";
import franchiseSeeder from "./franchise.seeder";

export default async function seeder(prisma: PrismaClient) {
  // const josh = await UserSeeder(prisma, {
  //   auth_id: 'd01f1b15-1a7c-4e8f-bade-55485d917311',
  //   name: 'Josh Evensen',
  // })

  await franchiseSeeder(prisma);
  await inkSeeder(prisma);
  await raritySeeder(prisma);
  await setSeeder(prisma);
  await typeSeeder(prisma);

  // await CollectionSeeder(prisma, josh.id);
}
