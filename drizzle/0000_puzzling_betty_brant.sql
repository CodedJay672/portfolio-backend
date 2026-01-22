CREATE TYPE "public"."user_status" AS ENUM('online', 'away', 'asleep', 'offline');--> statement-breakpoint
CREATE TABLE "users" (
	"id" uuid PRIMARY KEY NOT NULL,
	"full_name" text,
	"phone" varchar(13),
	"email" text NOT NULL,
	"image_url" text,
	"role" text,
	"userStatus" "user_status" NOT NULL
);
