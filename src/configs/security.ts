import cors from "cors";
import rateLimit from "express-rate-limit";
import { configVariables } from "../lib/config";

const domain = configVariables.baseUrl;

export const corsRules = cors({
    origin: domain,
    methods: ["GET", "POST", "DELETE", "PUT"],
    allowedHeaders: ["Content-Type", "Authorization"],
    optionsSuccessStatus: 200,
});

export const apiLimiter = rateLimit({
    windowMs: 60 * 1000,
    max: 30,
    validate: { xForwardedForHeader: true },
    standardHeaders: "draft-8",
    legacyHeaders: false,
    statusCode: 400,
    message: {
        error: "Too many requests from this IP, please try again after 1 minute",
    },
});
