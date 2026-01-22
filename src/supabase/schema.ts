import { pgTable, text, uuid, varchar, pgEnum } from "drizzle-orm/pg-core";

export const statusEnums = pgEnum("user_status", [
    "online",
    "away",
    "asleep",
    "offline",
]);

export const users = pgTable("users", {
    id: uuid("id").primaryKey(),
    fullName: text("full_name"),
    phone: varchar("phone", { length: 13 }),
    email: text("email").notNull(),
    imgUrl: text("image_url"),
    role: text("role"),
    userStatus: statusEnums().notNull(),
});
