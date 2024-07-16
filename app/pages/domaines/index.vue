<script setup lang="ts">
  const { domaineIndex } = useBreadcrumbLinks();
</script>

<template>
  <div>

    <UBreadcrumb :links="domaineIndex"/>

    <TableWrapper>

      <template #header>
        <h5>
          Liste des domaines
        </h5>

        <UInput class="w-1/6 mt-5" required placeholder="Rechercher un domaine......."/>
      </template>

    </TableWrapper>

  </div>
</template>

<style scoped>

</style>