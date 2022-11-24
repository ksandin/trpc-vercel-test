import { inferAsyncReturnType, initTRPC } from "@trpc/server";
import { CreateExpressContextOptions } from "@trpc/server/dist/adapters/express";

export const t = initTRPC.context<Context>().create();

export const createContext = ({}: CreateExpressContextOptions) => ({});

export type Context = inferAsyncReturnType<typeof createContext>;

