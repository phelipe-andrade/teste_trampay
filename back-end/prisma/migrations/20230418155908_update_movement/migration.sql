/*
  Warnings:

  - The `deleted_at` column on the `movements` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "movements" DROP COLUMN "deleted_at",
ADD COLUMN     "deleted_at" TIMESTAMP(3);
