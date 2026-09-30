import z from "zod";
export const loginSchema = z.object({
  name: z
    .string()
    .min(3, "name must not be lesser than 3 character")
    .max(30, "name must not be greater than 30 character"),
  email: z.email().nonempty("email is required"),
  phoneNumber: z.e164(),
  country: z.string().nonempty("Country is required"),
  address: z.string().optional(),
});
