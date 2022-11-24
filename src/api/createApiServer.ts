import express from 'express';
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { createApiRouter } from "./createRouter";
import { createContext } from "./trpc";

export function createApiServer () {
  const server = express();
  server.use(
    "/api", // Has to be /api because of Vercel's Serverless Function entrypoint
    createExpressMiddleware({
      router: createApiRouter(),
      createContext,
    })
  );
  return server;
}
