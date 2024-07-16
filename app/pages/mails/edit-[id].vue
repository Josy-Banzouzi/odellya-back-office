<script setup lang="ts">
  const { mailShow } = useBreadcrumbLinks();
</script>

<template>
  <div>

    <UBreadcrumb :links="mailShow" />

  </div>
</template>

<style scoped>

</style>