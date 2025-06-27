import { z } from "zod";
import { FullNameSchema } from "./fullname.js";
import { PassportSchema } from "./passport.js";
import { BirthInfoSchema } from "./birth.js";

export type ManifestRoot = z.infer<typeof ManifestRootSchema>;
export const ManifestRootSchema = z.object({
    version: z.literal(0),

    chosenFullName: FullNameSchema.nullish(),

    birth: BirthInfoSchema.optional(),
    passports: PassportSchema.array().optional(),
});
