<script setup lang="ts">
  const { userIndex } = useBreadcrumbLinks()
</script>

<template>
  <div>

    <UBreadcrumb :links="userIndex" />

  </div>
</template>

<style scoped>

</style>