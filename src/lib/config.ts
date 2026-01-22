import { config } from "dotenv";

config();

export const configVariables = {
    baseUrl: process.env.DOMAIN,
    port: process.env.PORT,
    env: process.env.NODE_ENV,
    jwtSecret: process.env.JWT_SECRET,
    refreshSecret: process.env.REFRESH_TOKEN,
    accessSecret: process.env.ACCESS_SECRET,
    accessExpAt: process.env.ACCESS_TTL,
    refreshExpAt: process.env.REFRESH_TTL,
    dbUrl: process.env.DATABASE_URL,
};
