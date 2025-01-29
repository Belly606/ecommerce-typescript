import { z } from "zod";

const registerSchema = z
  .object({
    firstName: z.string().min(1, "First name is required"),
    lastName: z.string().min(1, "Last name is required"),
    email: z
      .string()
      .min(1, "Email is required")
      .email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(8, "Password must be at least 8 characters")
      .regex(
        /.*[!@#$%^&*()_+{}|[\]\\:";'<>?,./].*/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string().min(1, "Confirm password is required"),
  })
  .refine((input) => input.password === input.confirmPassword, {
    message: "Password and confirm password does not match",
    path: ["confirmPassword"],
  });

type TRegisterType = z.infer<typeof registerSchema>;

export { registerSchema, type TRegisterType };
