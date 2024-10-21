import { initTRPC } from "@trpc/server";
import { Context } from "./context.js";

export const trpcInstance = initTRPC.context<Context>().create({});
