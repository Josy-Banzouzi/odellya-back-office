<script setup lang="ts">
  const { userIndex } = useBreadcrumbLinks()
</script>

<template>
  <div>

    <UBreadcrumb :links="userIndex" />

    <TableWrapper>

      <template #header>
        <h5>
          Liste des utilisateurs
        </h5>

        <UInput class="w-1/6 mt-5" required placeholder="Rechercher un utilisateur......."/>
      </template>

    </TableWrapper>

  </div>
</template>

<style scoped>

</style>