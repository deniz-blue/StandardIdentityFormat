import { z } from "zod";

export const CitizenshipSchema = z.object({
    country: z.string(),
});
