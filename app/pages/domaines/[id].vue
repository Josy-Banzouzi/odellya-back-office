<script setup lang="ts">

const { domaineShow} = useBreadcrumbLinks();

</script>

<template>
  <div>

    <UBreadcrumb :links="domaineShow"/>

  </div>
</template>

<style scoped>

</style>