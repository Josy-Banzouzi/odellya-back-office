<script setup lang="ts">
defineProps<{
  icon: string,
  title: string,
  color: string,
  account: number
}>()
</script>

<template>
  <div class="w-1/3 h-28 border-2 border-blue-800 rounded-md shadow-2xl px-5 flex flex-col justify-center items-center" :class="color">
    <div class="w-full">
      <Icon :name="icon" size="30" class="float-end"/>
    </div>
    <p class="text-xl">{{title}}</p>
    <span class="text-3xl font-bold text-center">{{account}}</span>
  </div>
</template>