import {Prisma, PrismaClient} from "@prisma/client";
import FranchiseCreateInput = Prisma.FranchiseCreateInput;
import {findOrCreateFranchise} from "../lib/models";

export default async function franchiseSeeder(prisma: PrismaClient) {
  const franchises: FranchiseCreateInput[] = [
    {name: '101 Dalmatians'},
    {name: 'Aladdin'},
    {name: 'Alice in Wonderland'},
    {name: 'Atlantis'},
    {name: 'Beauty & the Beast'},
    {name: 'Big Hero 6'},
    {name: 'Brother Bear'},
    {name: 'Chip \'n\' Dale Rescue Rangers'},
    {name: 'Cinderella'},
    {name: 'Disney Lorcana'},
    {name: 'Duck Tales'},
    {name: 'Encanto'},
    {name: 'Fantasia'},
    {name: 'Frozen'},
    {name: 'Hercules'},
    {name: 'Lilo and Stitch'},
    {name: 'Mickey Mouse and Friends'},
    {name: 'Moana'},
    {name: 'Mulan'},
    {name: 'Peter Pan'},
    {name: 'Pinocchio'},
    {name: 'Raya and the Last Dragon'},
    {name: 'Robin Hood'},
    {name: 'Sleeping Beauty'},
    {name: 'Snow White and the Seven Dwarfs'},
    {name: 'TaleSpin'},
    {name: 'Tangled'},
    {name: 'The Emperor\'s New Grove'},
    {name: 'The Great Mouse Detective'},
    {name: 'The Jungle Book'},
    {name: 'The Lion King'},
    {name: 'The Little Mermaid'},
    {name: 'The Princess and the Frog'},
    {name: 'The Rescuers'},
    {name: 'The Sword in the Stone'},
    {name: 'Treasure Planet'},
    {name: 'Winnie the Pooh'},
    {name: 'Wreck it Ralph'},
    {name: 'Zootopia'},
  ]

  for (const franchise of franchises) {
    await findOrCreateFranchise(prisma, franchise.name)
  }
}
