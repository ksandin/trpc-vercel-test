import * as dotEnvFlow from "dotenv-flow";
import { createApiServer } from "./createApiServer";
import express from "express";
import morgan from "morgan";
import cors from "cors";

dotEnvFlow.config({ default_node_env: "development" })

const devServer = express();
devServer.use(cors());
devServer.use(morgan("dev"));
devServer.use("/api", createApiServer()); // Plug into /api to mimic Vercel's behavior

const port = process.env.VITE_API_PORT;
devServer.listen(port, () => {
  console.log(`API dev server is listening on http://localhost:${port}`);
});