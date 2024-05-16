/*
  Warnings:

  - You are about to drop the column `userId` on the `Group` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "Membership" (
    "groupId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,

    PRIMARY KEY ("groupId", "userId"),
    CONSTRAINT "Membership_groupId_fkey" FOREIGN KEY ("groupId") REFERENCES "Group" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Membership_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Group" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "discord" TEXT NOT NULL,
    "weekDays" TEXT NOT NULL,
    "hourStart" INTEGER NOT NULL,
    "hourEnd" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "isPrivate" BOOLEAN NOT NULL DEFAULT true,
    "isAvailable" BOOLEAN NOT NULL DEFAULT true
);
INSERT INTO "new_Group" ("createdAt", "discord", "hourEnd", "hourStart", "id", "isPrivate", "name", "weekDays") SELECT "createdAt", "discord", "hourEnd", "hourStart", "id", "isPrivate", "name", "weekDays" FROM "Group";
DROP TABLE "Group";
ALTER TABLE "new_Group" RENAME TO "Group";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
