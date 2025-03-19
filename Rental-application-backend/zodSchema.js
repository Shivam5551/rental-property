import { z } from "zod";


export const userSigninSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export const userSignupSchema = z.object({
  Fullname: z.string().min(1),
  email: z.string().email(),
  password: z.string().min(8),
  phone: z.string().optional(),
});

export const propertySchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  price: z.number().positive(),
  location: z.string().min(1),
});

export const bookingSchema = z.object({
  user: z.string().min(1),
  property: z.string().min(1),
  startDate: z.date(),
  endDate: z.date(),
});

export const bookingUpdateSchema = z.object({
  startDate: z.date().optional(),
  endDate: z.date().optional(),
});