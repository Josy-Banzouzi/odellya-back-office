<script setup lang="ts">
  const { hostingShow} = useBreadcrumbLinks();
</script>

<template>
  <div>
    <UBreadcrumb :links="hostingShow"/>
  </div>
</template>

<style scoped>

</style>