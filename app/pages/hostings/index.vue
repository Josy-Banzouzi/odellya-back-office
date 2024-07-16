<script setup lang="ts">
  const { hostingIndex } = useBreadcrumbLinks();
</script>

<template>
  <div>
    <UBreadcrumb :links="hostingIndex" />
  </div>
</template>

<style scoped>

</style>