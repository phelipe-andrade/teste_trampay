/*
  Warnings:

  - You are about to drop the `moviments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "moviments" DROP CONSTRAINT "moviments_registered_by_fkey";

-- DropTable
DROP TABLE "moviments";

-- CreateTable
CREATE TABLE "movements" (
    "id" SERIAL NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "cpf" TEXT NOT NULL,
    "date_launch" TEXT NOT NULL,
    "registered_by" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL,
    "deleted_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "movements_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "movements" ADD CONSTRAINT "movements_registered_by_fkey" FOREIGN KEY ("registered_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
