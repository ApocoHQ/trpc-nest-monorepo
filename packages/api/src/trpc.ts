import { initTRPC, TRPCError } from "@trpc/server";
import { Context } from "./context.js";

export const trpcInstance = initTRPC.context<Context>().create({});

export const authenticatedTrpcProcedure = trpcInstance.procedure.use(
  function withAuth(opts) {
    const { ctx } = opts;

    const session = ctx.session;
    if (session === null) {
      throw new TRPCError({ code: "UNAUTHORIZED" });
    }

    return opts.next({
      ctx: {
        ...ctx,
        session,
      },
    });
  }
);
