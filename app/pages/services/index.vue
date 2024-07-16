<script setup lang="ts">
  const { serviceIndex } = useBreadcrumbLinks();
</script>

<template>
  <div>

    <UBreadcrumb :links="serviceIndex" />

  </div>
</template>

<style scoped>

</style>