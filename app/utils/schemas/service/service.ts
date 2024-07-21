import { z } from "zod";

export const serviceSchema = z.object({
    name: z.string({
        required_error: "Le nom est requit",
        invalid_type_error: "Le nom ne doit pas etre vide"
    })
})