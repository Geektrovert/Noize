import { object, string, number, mixed, InferType } from "yup";

export const productSchema = object({
  name: string().required("Name is required"),
  price: number()
    .required("Price is required")
    .typeError("Price must be a number")
    .min(10, "Price must be greater than 10 USDC")
    .max(1000, "Price must be less than 1000 USDC"),
  image: mixed()
    .required("Image is required, max: 1mb")
    .test("fileSize", "Must be smaller than 1MB", (value) => {
      if (!value) return true;
      return value.size <= 1000000;
    }),
});

export type ProductSchema = InferType<typeof productSchema>;
