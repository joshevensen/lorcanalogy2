import { PrismaClient } from '@prisma/client'
import UserSeeder from "@/seeders/user.seeder";
import CollectionSeeder from "@/seeders/collection.seeder";
const prisma = new PrismaClient()

async function main() {
    const josh = await UserSeeder(prisma, {
        auth_id: 'd01f1b15-1a7c-4e8f-bade-55485d917311',
        name: 'Josh Evensen',
    })

    await CollectionSeeder(prisma, josh.id);
}
main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
