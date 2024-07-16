<script setup lang="ts">
  const { hostingIndex } = useBreadcrumbLinks();
</script>

<template>
  <div>
    <UBreadcrumb :links="hostingIndex" />

    <TableWrapper>

      <template #header>
        <h5>
          Liste des hebergements web
        </h5>

        <div class="flex justify-between mt-5">
          <UInput class="w-1/6" required placeholder="Rechercher un hebergement......."/>

          <UButton @click="() => navigateTo(`hostings/create`)" icon="i-heroicons-plus" size="sm"
                   color="primary" variant="solid" label="Ajouter un hebergemnt"/>
        </div>
      </template>

    </TableWrapper>

  </div>
</template>

<style scoped>

</style>