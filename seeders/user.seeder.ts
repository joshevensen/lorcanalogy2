import type {PrismaClient} from "@prisma/client";
import {Prisma} from "@prisma/client";

export default async function UserSeeder(prisma: PrismaClient, userData: Prisma.UserCreateInput) {
  return prisma.user.upsert({
    where: {auth_id: userData.auth_id},
    update: {},
    create: userData,
  })
}
