<script setup lang="ts">
defineProps<{
  icon: string,
  title: string,
  color: string,
  account: number
}>()
</script>

<template>
  <div class="w-1/3 gap-2 p-3 transition hover:bg-blue-900 hover:border-white hover:text-white cursor-pointer border-2 border-blue-800 rounded-lg shadow-2xl px-5 flex flex-col justify-center items-center" :class="color">
    <div class="w-full flex justify-center">
      <Icon :name="icon" size="50" class="float-end"/>
    </div>
    <p class="text-xl">{{title}}</p>
    <span class="text-3xl font-bold text-center">{{account}}</span>
  </div>
</template>