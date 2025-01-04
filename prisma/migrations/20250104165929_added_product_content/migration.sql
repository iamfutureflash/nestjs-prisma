-- AlterTable
ALTER TABLE `Product` MODIFY `price` DOUBLE NULL DEFAULT 0;

-- AlterTable
ALTER TABLE `Review` ADD COLUMN `product_content` JSON NULL;
