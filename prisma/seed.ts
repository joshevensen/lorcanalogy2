import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()
import seeder from "../seeders";

async function main() {
    await seeder(prisma)
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
