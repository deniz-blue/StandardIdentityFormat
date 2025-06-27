import { z } from "zod";

export const PassportSchema = z.object({
    passportNumber: z.string(),
    issueDate: z.string(),
    expiryDate: z.string(),
});
