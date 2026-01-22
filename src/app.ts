import compression from "compression";
import express from "express";
import helmet from "helmet";
import cookieParser from "cookie-parser";

import exampleRouter from "./api/routes/router-example";
import { morganMiddleware, winstonLogger } from "./configs/logging";
import { apiLimiter, corsRules } from "./configs/security";
import { configVariables } from "./lib/config";

const app = express();
const port = configVariables.port;

app.use(helmet());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());
app.use(compression({ threshold: 1024 }));
app.use(corsRules);
app.use(apiLimiter);
app.use(morganMiddleware);

// ROUTES
app.use("/api/v1/example", exampleRouter);

app.listen(port, () => {
    winstonLogger.info(
        `Server running on port ${port} in ${process.env.NODE_ENV} mode`,
    );
});
