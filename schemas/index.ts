import { z } from "zod";
export const navSchema = z.object({
  search: z.string(),
});

export const addressSchema = z.object({
  fullName: z.string().min(2).max(50),
  mobileNumber: z
    .string()
    .regex(/^\d{10}$/, "Mobile number must be exactly 10 digits."),
  pinCode: z.string().regex(/^\d{6}$/, "Pin Code must be exactly 6 digits."), // Assuming 6 digits for Indian pin codes
  houseNumber: z.string().min(3),
  area: z.string().min(3),
  landMark: z.string().optional(),
  town: z.string().min(3),
  state: z.enum([
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Assam",
    "Bihar",
    "Chhattisgarh",
    "Goa",
    "Gujarat",
    "Haryana",
    "Himachal Pradesh",
    "Jharkhand",
    "Karnataka",
    "Kerala",
    "Madhya Pradesh",
    "Maharashtra",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Odisha",
    "Punjab",
    "Rajasthan",
    "Sikkim",
    "Tamil Nadu",
    "Telangana",
    "Tripura",
    "Uttar Pradesh",
    "Uttarakhand",
    "West Bengal",
    "Andaman and Nicobar Islands",
    "Chandigarh",
    "Dadra and Nagar Haveli and Daman and Diu",
    "Delhi",
    "Lakshadweep",
    "Puducherry",
    "Ladakh",
  ]),
});
