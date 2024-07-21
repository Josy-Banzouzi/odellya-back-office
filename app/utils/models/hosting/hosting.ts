
export interface HostingPlan {
    readonly id?:number;
    name: string;
    domainNumber: number;
    diskSpaceGB: number;
    hostedWebsites: number;
    hostedDomains: number;
    unlimitedSubdomains: number;
    ftpAccess: number;
    mysqlDatabases: number;
    emailAccounts: number;
    emailAccountStorageGB: number;
    unlimitedBandwidth: boolean;
    priceExclTax: number;
    price: number;
    isActivated?: boolean;
}
