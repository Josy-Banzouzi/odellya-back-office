import {z} from "zod";

export const userSchema = z.object({
    name: z.string({
        required_error: "Le nom est requit",
        description: "L'adress mail est requit"
    }),

    firstname: z.string({
        required_error: "Le prenom est requit"
    }),

    email: z.string({
        required_error: "L'adress mail est requit"
    }).email("Veuillez inserer une address mail valide"),

    password: z.string({
        required_error: "Le mot de passe est requit"
    }).min(6, 'Le mot de passe ne doit pas etre vide')
})