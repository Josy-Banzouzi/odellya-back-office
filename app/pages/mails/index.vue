<script setup lang="ts">
  const { mailIndex } = useBreadcrumbLinks();
</script>

<template>
  <div>

    <UBreadcrumb :links="mailIndex" />

  </div>
</template>

<style scoped>

</style>