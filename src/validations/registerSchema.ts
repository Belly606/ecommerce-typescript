import { z } from "zod";

const registerSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z.string().min(1, "Email is required").email(),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/,
        "Password should contain at least 1 special character"
      ),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });

type registerType = z.infer<typeof registerSchema>;

export { registerSchema, type registerType };
