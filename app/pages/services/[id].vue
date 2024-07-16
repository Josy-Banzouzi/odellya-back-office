<script setup lang="ts">
  const { serviceShow } = useBreadcrumbLinks();
</script>

<template>
  <div>

    <UBreadcrumb :links="serviceShow" />

  </div>
</template>

<style scoped>

</style>