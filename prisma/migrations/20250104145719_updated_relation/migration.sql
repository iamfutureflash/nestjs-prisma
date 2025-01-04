/*
  Warnings:

  - You are about to drop the column `message` on the `Review` table. All the data in the column will be lost.
  - Added the required column `content` to the `Review` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Review` DROP COLUMN `message`,
    ADD COLUMN `content` VARCHAR(191) NOT NULL;
