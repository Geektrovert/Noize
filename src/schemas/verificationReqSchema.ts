import { object, string, number, InferType } from "yup";

export const verificationSchema = object({
  name: string().required("Name is required"),
  nid: number().required("NID is required").typeError("NID must be a number").
    test("len", "NID must be 10 digits", (value) => {
      return value?.toString().length === 10;
    }),
});

export type VerificationData = InferType<typeof verificationSchema>;
