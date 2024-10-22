import { z } from "zod";
import { authenticatedTrpcProcedure, trpcInstance } from "./trpc.js";

const randomNumberInputSchema = z.object({
  min: z.number().min(0),
  max: z.number().min(0),
});

export const router = trpcInstance.router({
  getRandomNumber: authenticatedTrpcProcedure
    .input(randomNumberInputSchema)
    .output(z.number())
    .query(async ({ ctx, input }) => {
      return ctx.numberGenerator.getRandomNumber(ctx.session, input);
    }),
});

export type Contract = typeof router;
