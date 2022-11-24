import { createTRPCReact } from "@trpc/react-query";
import type { ApiRouter } from "../api/createRouter";

export const trpc = createTRPCReact<ApiRouter>();