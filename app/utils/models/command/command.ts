import type {Service} from "~/utils/models/service/service";
import type {CommandStatus} from "~/utils/enums/status";
import type {MailPlan} from "~/utils/models/mail/mail";
import type {HostingPlan} from "~/utils/models/hosting/hosting";
import type {User} from "~/utils/models/user/user";

export interface Command {
    readonly id: number;
    domainName?: string;
    period?: string;
    price?: number;
    status: CommandStatus;
    services?: Service[];
    hostings?: HostingPlan[];
    mails?: MailPlan[];
    user: User;
}
