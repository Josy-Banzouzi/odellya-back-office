<script setup lang="ts">

 const { hostingUpdate } = useBreadcrumbLinks();

</script>

<template>
  <div>

    <UBreadcrumb :links="hostingUpdate" />

  </div>
</template>

<style scoped>

</style>