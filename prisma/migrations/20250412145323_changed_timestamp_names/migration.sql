/*
  Warnings:

  - You are about to drop the column `createdAt` on the `archetypes` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `archetypes` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `cards` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `cards` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `characters` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `classifications` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `classifications` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `decks` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `decks` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `franchises` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `franchises` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `inks` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `inks` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `keywords` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `keywords` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `rarities` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `rarities` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `types` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `types` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `users` table. All the data in the column will be lost.
  - Added the required column `updated_at` to the `archetypes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `cards` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `characters` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `classifications` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `decks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `franchises` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `inks` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `keywords` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `rarities` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "archetypes" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "cards" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "characters" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "classifications" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "decks" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "franchises" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "inks" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "keywords" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "rarities" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "types" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "users" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL;
