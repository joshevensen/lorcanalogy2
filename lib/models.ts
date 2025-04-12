import {PrismaClient} from "@prisma/client";

/**
 * Franchise
 */
export async function findOrCreateFranchise(prisma: PrismaClient, name: string) {
  const existing = await prisma.franchise.findFirst({where: {
      name: name
    }})

  if (!existing) await prisma.franchise.create({data: {
      name: name
    }})
}

/**
 * Ink
 */
export async function findOrCreateInk(prisma: PrismaClient, name: string) {
  const existing = await prisma.ink.findFirst({where: {
      name: name
    }})

  if (!existing) await prisma.ink.create({data: {
      name: name
    }})
}

/**
 * Rarity
 */
export async function findOrCreateRarity(prisma: PrismaClient, name: string) {
  const existing = await prisma.rarity.findFirst({where: {
    name: name
  }})

  if (!existing) await prisma.rarity.create({data: {
    name: name
  }})
}

/**
 * Type
 */
export async function findOrCreateType(prisma: PrismaClient, name: string) {
  const existing = await prisma.type.findFirst({where: {
      name: name
    }})

  if (!existing) await prisma.type.create({data: {
      name: name
    }})
}
