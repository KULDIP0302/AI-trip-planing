import { z } from "zod";

export const bookingSchema = z.object({
  fullName: z
    .string()
    .trim()
    .min(3, "Full name must be at least 3 characters")
    .max(50, "Full name cannot exceed 50 characters"),

  email: z
    .string()
    .trim()
    .min(1, "Email is required")
    .email("Enter a valid email address"),

  phone: z
    .string()
    .regex(/^[0-9]{10}$/, "Phone number must be exactly 10 digits"),

  travelers: z.coerce
    .number()
    .min(1, "At least 1 traveler is required")
    .max(20, "Maximum 20 travelers allowed"),

  travelDate: z.string().min(1, "Please select a travel date"),

  specialRequest: z
    .string()
    .trim()
    .max(500, "Special request cannot exceed 500 characters")
    .optional(),
});
