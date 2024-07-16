<script setup lang="ts">
  const { domaineIndex } = useBreadcrumbLinks();
</script>

<template>
  <div>

    <UBreadcrumb :links="domaineIndex"/>

  </div>
</template>

<style scoped>

</style>