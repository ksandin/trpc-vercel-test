import express from 'express';
import cors from "cors";
import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { createApiRouter } from "./createRouter";
import { createContext } from "./trpc";

export function createServer () {
  const server = express();
  server.use(cors())
  server.use(
    '/trpc',
    createExpressMiddleware({
      router: createApiRouter(),
      createContext,
    }),
  );

  return server;
}
