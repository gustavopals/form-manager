/*
  Warnings:

  - A unique constraint covering the columns `[id]` on the table `FormTable` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "FormHeader" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "formTableId" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "FormHeader_formTableId_fkey" FOREIGN KEY ("formTableId") REFERENCES "FormTable" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FormDetail" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "formTableId" INTEGER NOT NULL,
    "formFieldId" INTEGER NOT NULL,
    "formHeaderId" INTEGER NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "FormDetail_formTableId_fkey" FOREIGN KEY ("formTableId") REFERENCES "FormTable" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FormDetail_formFieldId_fkey" FOREIGN KEY ("formFieldId") REFERENCES "FormField" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FormDetail_formHeaderId_fkey" FOREIGN KEY ("formHeaderId") REFERENCES "FormHeader" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "FormTable_id_key" ON "FormTable"("id");
