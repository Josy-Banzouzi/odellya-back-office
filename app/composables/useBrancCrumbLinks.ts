
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
    const agentCreate = odellyaSelectionLinks('Agents', '/agents', 'Nouvel Agent')
    const agentUpdate = odellyaSelectionLinks('Agents', '/agents', 'Modification de l\'user')

    return {
        agentIndex,
        agentCreate,
        agentUpdate
    }
}