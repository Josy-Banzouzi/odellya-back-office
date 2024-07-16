<script setup lang="ts">
  const { mailCreate } = useBreadcrumbLinks();
</script>

<template>
  <div>

    <UBreadcrumb :links="mailCreate" />

  </div>
</template>

<style scoped>

</style>