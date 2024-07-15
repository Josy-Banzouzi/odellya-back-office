import {z} from "zod";

export const authSchema = z.object({
    email: z.string().email('Veuillez inserer une address mail valide'),
    password: z.string().min(6, 'Le mot de passe ne doit pas etre vide')
})
