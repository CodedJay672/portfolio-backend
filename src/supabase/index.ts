import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { configVariables } from "../lib/config";

const dbUrl = configVariables.dbUrl;
// verify connection string
if (!dbUrl) throw new Error("Database connection string is missing");

// Disable prefetch as it is not supported for "Transaction" pool mode
const client = postgres(dbUrl, { prepare: false });
const db = drizzle(client);
