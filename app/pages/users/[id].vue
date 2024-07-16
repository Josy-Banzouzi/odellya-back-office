<script setup lang="ts">
 const { userShow } = useBreadcrumbLinks();
</script>

<template>
  <div>

    <UBreadcrumb :links="userShow" />

  </div>
</template>

<style scoped>

</style>