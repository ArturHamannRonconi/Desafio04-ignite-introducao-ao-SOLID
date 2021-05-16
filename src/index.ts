import express from "express";
import swagger from "swagger-ui-express";

import swaggerJson from "./openapi.json";
import { usersRoutes } from "./routes/users.routes";

const app = express();

app.use(express.json());
app.use("/api-docs", swagger.serve, swagger.setup(swaggerJson));
app.use("/users", usersRoutes);

export { app };
