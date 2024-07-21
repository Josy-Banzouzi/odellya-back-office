
export interface MailPlan {
    readonly id:number;
    name: string;
    mailNumber: number;
    price: number;
    diskSpaceGB: number;
    isActivated?: boolean;
    description?: string;
}
