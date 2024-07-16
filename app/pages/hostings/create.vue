<script setup lang="ts">
  const { hostingCreate } = useBreadcrumbLinks();
</script>

<template>
  <div>

    <UBreadcrumb :links="hostingCreate" />

  </div>
</template>

<style scoped>

</style>