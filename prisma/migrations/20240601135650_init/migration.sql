-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "name" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrademarkFile" (
    "id" SERIAL NOT NULL,
    "nameOfTrademark" TEXT NOT NULL,
    "descriptionOfGoodsAndService" TEXT,
    "userId" INTEGER,

    CONSTRAINT "TrademarkFile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "TrademarkFile" ADD CONSTRAINT "TrademarkFile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
