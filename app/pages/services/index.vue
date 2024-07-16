<script setup lang="ts">
  const { serviceIndex } = useBreadcrumbLinks();
</script>

<template>
  <div>

    <UBreadcrumb :links="serviceIndex" />

    <TableWrapper>

      <template #header>
        <h5>
          Liste des services
        </h5>

        <div class="flex justify-between mt-5">
          <UInput class="w-1/6" required placeholder="Rechercher un service......."/>

          <UButton @click="() => navigateTo(`services/create`)" icon="i-heroicons-plus" size="sm"
                   color="primary" variant="solid" label="Ajouter un service"/>
        </div>
      </template>

    </TableWrapper>

  </div>
</template>

<style scoped>

</style>