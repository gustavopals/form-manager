-- CreateTable
CREATE TABLE "FormTable" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tableName" TEXT NOT NULL,
    "code" TEXT NOT NULL,
    "captionBr" TEXT NOT NULL,
    "captionEn" TEXT NOT NULL,
    "captionEs" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateTable
CREATE TABLE "FormField" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "formTableId" INTEGER NOT NULL,
    "fieldName" TEXT NOT NULL,
    "captionBr" TEXT NOT NULL,
    "captionEn" TEXT NOT NULL,
    "captionEs" TEXT NOT NULL,
    "component" TEXT NOT NULL,
    "grid" INTEGER NOT NULL,
    "order" INTEGER NOT NULL,
    "isNewLine" BOOLEAN NOT NULL,
    "required" BOOLEAN NOT NULL,
    "iniValue" TEXT NOT NULL,
    "help" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "FormField_formTableId_fkey" FOREIGN KEY ("formTableId") REFERENCES "FormTable" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "FormTable_tableName_key" ON "FormTable"("tableName");
