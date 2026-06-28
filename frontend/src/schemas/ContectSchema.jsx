import { z } from "zod";

export const ContectSchema = z.object({
  FullName: z.string()
    .min(10, "full name must be at least 10 characters"),
  email: z.string().email("invalid email address"),
});