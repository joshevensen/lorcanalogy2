import { PrismaClient } from '@prisma/client';
import { enhance } from '@zenstackhq/runtime';
// import { getSessionUser } from './auth';

const prisma = new PrismaClient();
const db = enhance(prisma);
// const db = enhance(prisma, { user: getSessionUser() });

export default db;

export const runtime = 'edge';
