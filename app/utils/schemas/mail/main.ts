import {z} from "zod";


export const mailSchema = z.object({
    name: z.string()
        .min(1, { message: "Le nom ne doit pas être vide." }),

    mailNumber: z.number()
        .int({ message: "Le nombre d'emails doit être un entier." })
        .refine(val => val >= 0, { message: "Le nombre d'emails ne doit pas être vide." }),

    price: z.number()
        .refine(val => val >= 0, { message: "Le prix ne doit pas être vide." }),

    diskSpaceGB: z.number()
        .int({ message: "L'espace disque doit être un entier." })
        .refine(val => val >= 0, { message: "L'espace disque ne doit pas être vide." }),

    isActivated: z.boolean()
        .default(true),

    description: z.string()
        .optional()
        .nullable()
})