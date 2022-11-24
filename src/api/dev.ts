import { createApiServer } from "./createApiServer";
import express from "express";
import morgan from "morgan";

const devServer = express();
devServer.use(morgan("dev"));
devServer.use("/api", createApiServer()); // Plug into /api to mimic Vercel's behavior
devServer.listen(3000, () => {
  console.log("API dev server is listening on http://localhost:3000");
});