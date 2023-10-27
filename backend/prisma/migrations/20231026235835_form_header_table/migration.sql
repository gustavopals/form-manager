/*
  Warnings:

  - Added the required column `formString` to the `FormHeader` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FormHeader" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "formTableId" INTEGER NOT NULL,
    "code" TEXT NOT NULL,
    "formString" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "FormHeader_formTableId_fkey" FOREIGN KEY ("formTableId") REFERENCES "FormTable" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_FormHeader" ("code", "createdAt", "deleted", "formTableId", "id", "updatedAt") SELECT "code", "createdAt", "deleted", "formTableId", "id", "updatedAt" FROM "FormHeader";
DROP TABLE "FormHeader";
ALTER TABLE "new_FormHeader" RENAME TO "FormHeader";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
