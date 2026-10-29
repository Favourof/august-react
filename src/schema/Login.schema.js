import z from "zod";
export const loginSchema = z.object({
  email: z.email().nonempty("email is required"),
  password: z.string().nonempty("password is required"),
});

export const registerSchema = z.object({
  firstName: z
    .string()
    .min(3, "firstName must not be lesser than 3 character")
    .max(30, "firstName must not be greater than 30 character"),
  lastName: z
    .string()
    .min(3, "lastName must not be lesser than 3 character")
    .max(30, "lastName must not be greater than 30 character"),
  email: z.email().nonempty("email is required"),
  password: z.string().nonempty("password is required"),
});
