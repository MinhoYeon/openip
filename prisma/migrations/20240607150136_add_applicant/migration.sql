/*
  Warnings:

  - Made the column `userId` on table `TrademarkFile` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "TrademarkFile" DROP CONSTRAINT "TrademarkFile_userId_fkey";

-- AlterTable
ALTER TABLE "TrademarkFile" ADD COLUMN     "acceleratedExamination" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "reviewOfRegistration" BOOLEAN NOT NULL DEFAULT false,
ALTER COLUMN "userId" SET NOT NULL;

-- CreateTable
CREATE TABLE "Applicant" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "typeOfApplicant" TEXT NOT NULL,
    "address" TEXT,
    "numberOfResidentRegistration" TEXT NOT NULL,
    "codeOfApplicant" TEXT NOT NULL,
    "trademarkFileId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,
    "createAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Applicant_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Applicant_codeOfApplicant_key" ON "Applicant"("codeOfApplicant");

-- AddForeignKey
ALTER TABLE "TrademarkFile" ADD CONSTRAINT "TrademarkFile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_trademarkFileId_fkey" FOREIGN KEY ("trademarkFileId") REFERENCES "TrademarkFile"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Applicant" ADD CONSTRAINT "Applicant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
