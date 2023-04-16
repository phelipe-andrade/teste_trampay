-- CreateTable
CREATE TABLE "Moviments" (
    "id" SERIAL NOT NULL,
    "value" DOUBLE PRECISION NOT NULL,
    "cpf" TEXT NOT NULL,
    "date_launch" TIMESTAMP(3) NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "deleted_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Moviments_pkey" PRIMARY KEY ("id")
);
