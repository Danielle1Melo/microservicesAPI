-- CreateTable
CREATE TABLE "users:users" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "users:users_id_key" ON "users:users"("id");

-- CreateIndex
CREATE UNIQUE INDEX "users:users_email_key" ON "users:users"("email");
