/*
  Warnings:

  - Added the required column `value` to the `FormDetail` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_FormDetail" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "formTableId" INTEGER NOT NULL,
    "formFieldId" INTEGER NOT NULL,
    "formHeaderId" INTEGER NOT NULL,
    "value" TEXT NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    CONSTRAINT "FormDetail_formTableId_fkey" FOREIGN KEY ("formTableId") REFERENCES "FormTable" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FormDetail_formFieldId_fkey" FOREIGN KEY ("formFieldId") REFERENCES "FormField" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "FormDetail_formHeaderId_fkey" FOREIGN KEY ("formHeaderId") REFERENCES "FormHeader" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_FormDetail" ("createdAt", "deleted", "formFieldId", "formHeaderId", "formTableId", "id", "updatedAt") SELECT "createdAt", "deleted", "formFieldId", "formHeaderId", "formTableId", "id", "updatedAt" FROM "FormDetail";
DROP TABLE "FormDetail";
ALTER TABLE "new_FormDetail" RENAME TO "FormDetail";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
