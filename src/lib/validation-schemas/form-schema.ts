import { z } from 'zod';

export const formSchema = z.object({
    name: z.string().min(1, "*Required field"),
    company: z.string().min(1, "*Required field"),
    email: z.string().email("*Invalid email address").min(1, "*Required field"),
    phone: z.string().regex(/^\+?\d*(\d{8,})$/, "*Phone must be at least 8 numbers"),
    subject: z.string().min(1, "*Required field"),
    message: z.string().min(1, "*Required field"),
    agreement: z.boolean().refine((val) => val === true, {
        message: "*Required field",
    }),
});