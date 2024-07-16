
function odellyaBaseLink(){
    return[
        {
            label: 'Tableau de bord',
            icon: 'i-heroicons-home',
            to: `/`
        }
    ]
}

function odellyaSelectionLinks(section: string, basePath: string, label: string) {
    const route = useRoute();

    return [
        ...odellyaBaseLink(),
        {
            label: section,
            icon: 'i-heroicons-square-3-stack-3d',
            to: basePath
        },
        {
            label: label,
            icon: 'i-heroicons-link',
            to: route.path
        }
    ];
}

export function useBreadcrumbLinks(){

    const agentIndex = odellyaSelectionLinks('Agents', '/agents', 'Liste');
    const agentCreate = odellyaSelectionLinks('Agents', '/agents', 'Nouvel Agent');
    const agentUpdate = odellyaSelectionLinks('Agents', '/agents', 'Modification de l\'agent');
    const agentShow = odellyaSelectionLinks('Agents', '/agents', 'Details d\'un agent');

    const hostingIndex = odellyaSelectionLinks('Hebergements web', '/hostings', 'Liste')
    const hostingCreate = odellyaSelectionLinks('Hebergements web', '/hostings', 'Nouvel hebergement')
    const hostingUpdate = odellyaSelectionLinks('Hebergements web', '/hostings', 'Modification de l\'hebergement web')
    const hostingShow = odellyaSelectionLinks('Hebergements web', '/hostings', 'Details de l\'hebergement')

    const mailIndex = odellyaSelectionLinks('Hebergements mail',  '/mails', 'Liste')
    const mailCreate = odellyaSelectionLinks('Hebergements mail', '/mails', 'Nouvel hebergement')
    const mailUpdate = odellyaSelectionLinks('Hebergements mail', '/mails', 'Modification de l\'hebergement mail')
    const mailShow = odellyaSelectionLinks('Hebergement mail', '/mails', 'Details de l\'hebergement')

    const serviceIndex = odellyaSelectionLinks('Services', '/services', 'Liste')
    const serviceCreate = odellyaSelectionLinks('Services', '/services', 'Nouveau service')
    const serviceUpdate = odellyaSelectionLinks('Services', '/services', 'Modification du service')
    const serviceShow = odellyaSelectionLinks('Services', '/services', 'Details du service')

    const userIndex = odellyaSelectionLinks('Utilisateurs', '/users', 'Liste')
    const userShow = odellyaSelectionLinks('Utilisateurs', '/users', 'Details d\'un utilisateur')

    const domaineIndex = odellyaSelectionLinks('Domaines', '/domaines', 'Liste')
    const domaineShow = odellyaSelectionLinks('Domaines', '/domaines', 'Details du domaine')

    return {
        agentIndex,
        agentCreate,
        agentUpdate,
        agentShow,
        hostingIndex,
        hostingCreate,
        hostingUpdate,
        hostingShow,
        mailIndex,
        mailCreate,
        mailUpdate,
        mailShow,
        serviceIndex,
        serviceCreate,
        serviceUpdate,
        serviceShow,
        userIndex,
        userShow,
        domaineIndex,
        domaineShow
    }
}