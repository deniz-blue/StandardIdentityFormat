import { z } from "zod";

export const BirthInfoSchema = z.object({
    date: z.string(),
    sex: z.enum(["M", "F", "X"]),
}).partial();
