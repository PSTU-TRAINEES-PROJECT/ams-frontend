// This is the login Schema for Zod validation
import * as z from "zod";

export const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email("Must be a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
