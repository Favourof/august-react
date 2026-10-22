import z from "zod";

const imageFileSchema = z.preprocess(
  (value) => {
    if (typeof FileList !== "undefined" && value instanceof FileList) {
      return value.item(0)
    }

    return value
  },
  z.custom(
    (value) => typeof File !== "undefined" && value instanceof File,
    "Product image is required",
  ),
);

export const productSchema = z.object({
  title: z
    .string()
    .trim()
    .min(2, "Title must be at least 2 characters")
    .max(100, "Title must not be greater than 100 characters"),
  description: z
    .string()
    .trim()
    .min(10, "Description must be at least 10 characters")
    .max(1000, "Description must not be greater than 1000 characters"),
  price: z
    .number({ message: "Price is required" })
    .finite("Price must be a valid number")
    .positive("Price must be greater than 0"),
  category: z
    .string()
    .trim()
    .min(2, "Category is required")
    .max(50, "Category must not be greater than 50 characters"),
  stock: z
    .number({ message: "Stock is required" })
    .int("Stock must be a whole number")
    .nonnegative("Stock cannot be negative"),
  image: imageFileSchema,
});
