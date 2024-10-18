// This is the signup Schema for Zod validation
import { z } from "zod";

export const signupSchema = z
  .object({
    firstName: z.string().min(3, { message: "First Name is required" }),
    lastName: z.string().min(3, { message: "Last Name is required" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(6, { message: "Password must be at least 6 characters long" }),
    confirmPassword: z
      .string()
      .min(6, {
        message: "Confirm Password must be at least 6 characters long",
      }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords must match",
    path: ["confirmPassword"],
  });
