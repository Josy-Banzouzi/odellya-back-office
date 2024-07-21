import {z} from "zod";

export const hostingSchema = z.object({
    name: z.string().nonempty({ message: "Le nom ne doit pas être vide." }),
    domainNumber: z.number()
        .int({ message: "Le nombre de domaines doit être un entier." })
        .min(0, { message: "Le nombre de domaines doit être au moins 0." }),
    diskSpaceGB: z.number()
        .int({ message: "L'espace disque doit être un entier." })
        .min(0, { message: "L'espace disque doit être au moins 0." }),
    hostedWebsites: z.number()
        .int({ message: "Le nombre de sites hébergés doit être un entier." })
        .min(0, { message: "Le nombre de sites hébergés doit être au moins 0." }),
    hostedDomains: z.number()
        .int({ message: "Le nombre de domaines hébergés doit être un entier." })
        .min(0, { message: "Le nombre de domaines hébergés doit être au moins 0." }),
    unlimitedSubdomains: z.number()
        .int({ message: "Le nombre de sous-domaines illimités doit être un entier." })
        .min(0, { message: "Le nombre de sous-domaines illimités doit être au moins 0." }),
    ftpAccess: z.number()
        .int({ message: "Le nombre d'accès FTP doit être un entier." })
        .min(0, { message: "Le nombre d'accès FTP doit être au moins 0." }),
    mysqlDatabases: z.number()
        .int({ message: "Le nombre de bases de données MySQL doit être un entier." })
        .min(0, { message: "Le nombre de bases de données MySQL doit être au moins 0." }),
    emailAccounts: z.number()
        .int({ message: "Le nombre de comptes email doit être un entier." })
        .min(0, { message: "Le nombre de comptes email doit être au moins 0." }),
    emailAccountStorageGB: z.number()
        .int({ message: "L'espace de stockage des comptes email doit être un entier." })
        .min(0, { message: "L'espace de stockage des comptes email doit être au moins 0." }),
    unlimitedBandwidth: z.boolean({ message: "La bande passante illimitée doit être un booléen." }),
    priceExclTax: z.number()
        .min(0, { message: "Le prix hors taxes doit être au moins 0." }),
    price: z.number()
        .min(0, { message: "Le prix doit être au moins 0." }),
    isActivated: z.boolean().default(true).optional(),

})