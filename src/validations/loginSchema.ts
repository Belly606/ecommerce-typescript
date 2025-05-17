import { z } from "zod";

const loginSchema = z.object({
  email: z.string().min(1, "Email is required").email(),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type loginType = z.infer<typeof loginSchema>;

export { loginSchema, type loginType };
