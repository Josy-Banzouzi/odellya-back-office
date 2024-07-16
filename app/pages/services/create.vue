<script setup lang="ts">
 const { serviceCreate } = useBreadcrumbLinks();

</script>

<template>
  <div>

    <UBreadcrumb :links="serviceCreate" />

  </div>
</template>

<style scoped>

</style>