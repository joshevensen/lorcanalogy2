/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `rarities` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "rarities" ADD COLUMN     "image" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "rarities_name_key" ON "rarities"("name");
