import { z } from "zod";
import { trpcInstance } from "./trpc.js";

const randomNumberInputSchema = z.object({
  min: z.number().min(0),
  max: z.number().min(0),
});

export const router = trpcInstance.router({
  getRandomNumber: trpcInstance.procedure
    .input(randomNumberInputSchema)
    .output(z.number())
    .query(async ({ ctx, input }) => {
      return ctx.getRandomNumber(input);
    }),
});

export type Contract = typeof router;
