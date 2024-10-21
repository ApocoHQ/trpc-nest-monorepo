import { createTRPCReact } from "@trpc/react-query";
import { type Contract } from "@shared/api";

export const trpc = createTRPCReact<Contract>();
