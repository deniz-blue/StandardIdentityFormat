import { z } from "zod";

export const FullNameSchema = z.object({
    // title: z.string().nullish(),
    firstName: z.string(),
    middleName: z.string().nullish(),
    familyName: z.string(),
});
