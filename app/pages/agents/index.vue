<script setup lang="ts">
  import type {User} from "~/utils/models/user/user";

  const { agentIndex } = useBreadcrumbLinks();

  const q = ref('')

  const page = ref(1)

  const pageCount = ref(6)

  const isOpen = ref(false)

  const columns = [{
    key: 'name',
    label: 'Nom'
  }, {
    key: 'firstname',
    label: 'Prenom'
  }, {
    key: 'email',
    label: 'Email'
  }, {
    key: 'email',
    label: 'Adress mail'
  }, {
    key: 'actions'
  }]



  // const oneAgent = ref<Agent>({
  //   matricule: '',
  // })

  const agents = [
    {
      name: "Dupont",
      firstname: "Jean",
      email: "jean.dupont@example.com"
    },
    {
      name: "Martin",
      firstname: "Marie",
      email: "marie.martin@example.com"
    },
    {
      name: "Bernard",
      firstname: "Claude",
      email: "claude.bernard@example.com"
    },
    {
      name: "Dubois",
      firstname: "Sophie",
      email: "sophie.dubois@example.com"
    },
    {
      name: "Moreau",
      firstname: "Luc",
      email: "luc.moreau@example.com"
    }
  ];


  const confirmDeleteAgent = (agent: User) => {
    // oneAgent.value = agent;

    isOpen.value = true;
  };

  const items = (row: User) => [
    [
      {
        label: 'Modification',
        icon: 'i-heroicons-pencil-square-20-solid',
        click: () => navigateTo(`/apps/mangwele/agents/edit-${row.id}`)
      }
    ],
    [
      {
        label: 'Supprimer',
        icon: 'i-heroicons-trash-20-solid',
        click: () => confirmDeleteAgent(row)
      }
    ]
  ]

</script>

<template>
  <div>
     <UBreadcrumb :links="agentIndex"/>

    <TableWrapper>

      <template #header>
        <h5>
          Liste des agents
        </h5>

        <div class="flex justify-between mt-5">
          <UInput class="w-1/6" required placeholder="Rechercher un agent......."/>

          <UButton @click="() => navigateTo(`agents/create`)" icon="i-heroicons-plus" size="sm"
                   color="primary" variant="solid" label="Ajouter un agent"/>
        </div>
      </template>

      <template #content>
        <UTable :rows="agents" :columns="columns">

<!--          <template #fullname-data="{ row }">-->
<!--            {{ row.name }} {{ row.firstName }}-->
<!--          </template>-->

<!--          <template #statut-data="{ row }">-->
<!--            <UBadge size="sm" class="text-sm" :color="row.statut ? 'green' : 'red'">-->
<!--              {{ row.statut ? 'Actif' : 'Inactif' }}-->
<!--            </UBadge>-->
<!--          </template>-->

          <template #created_at-data="{ row }">
            {{ new Date(row.created_at).toLocaleDateString() }}
          </template>

          <template #actions-data="{ row }">
            <UDropdown :items="items(row)">
              <UButton color="gray" variant="ghost" icon="i-heroicons-ellipsis-horizontal-20-solid"/>
            </UDropdown>
          </template>
        </UTable>
      </template>

<!--      <template #footer>-->
<!--        <TableElementByPage v-model="pageCount"/>-->

<!--        <TablePaginationInfo :page="page" :page-count="pageCount" :length="agentStore.agents.length" title="agent(s)"/>-->

<!--        <UPagination v-if="!q && agentStore.agents.length" v-model="page" :page-count="pageCount"-->
<!--                     :total="agentStore.agents.length"/>-->
<!--      </template>-->
    </TableWrapper>
  </div>
</template>

<style scoped>

</style>