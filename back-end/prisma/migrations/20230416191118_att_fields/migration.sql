/*
  Warnings:

  - You are about to drop the `Moviments` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Moviments";

-- CreateTable
CREATE TABLE "moviments" (
    "id" SERIAL NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "cpf" TEXT NOT NULL,
    "date_launch" TIMESTAMP(3) NOT NULL,
    "registered_by" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "moviments_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "moviments" ADD CONSTRAINT "moviments_registered_by_fkey" FOREIGN KEY ("registered_by") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
