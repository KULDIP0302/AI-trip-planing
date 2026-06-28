import { z } from "zod";
export const RegisterSchema = z
  .object({
    FullName: z.string().min(10, "full name must be at least 10 characters"),
    //register validation//
    email: z.string().email("enter a valid email"),
    phone: z.string().regex(/^[0-9]{10}$/, "enter a valid phone number"),
    password: z
      .string()
      .regex(/^[A-Z]/, "enter atleast one uppercase  latter")
      .regex(/^[a-z]/, "enter atleast one lowercase letter")
      .min(8, "password must be at least 8 characters"),

    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["confirmPassword"],
    message: "passwords do not match",
  });
