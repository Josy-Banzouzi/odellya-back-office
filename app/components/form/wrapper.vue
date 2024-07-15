<script setup lang="ts">

interface wrapperAttributes {
  title: string
  errorsMessage: string | string[]
  errorMessage: string
  loading?: boolean
}

defineProps<wrapperAttributes>();

</script>

<template>
  <div class="mt-4 w-full shadow-2xl">
    <div v-if="!loading" class="bg-white dark:bg-gray-800 dark:border-gray-800 shadow-sm rounded-lg border">
      <div class="flex justify-start border-b dark:border-gray-600">
        <h1 class="text-gray-600 dark:text-white  text-lg my-2 px-5">
          {{ title }}
        </h1>
      </div>

      <div class="px-4 py-4">
        <UAlert icon="i-heroicons-bell-alert" color="orange" v-show="errorMessage" :title="errorMessage"
                class="mt-3" />

        <div v-if="errorsMessage.length > 0">
          <UAlert title="Erreurs" icon="i-heroicons-bell-alert" color="orange" variant="subtle">
            <template #description>
              <ul>
                <li v-for="error in errorsMessage" :key="error">* {{ error }}</li>
              </ul>
            </template>
          </UAlert>
        </div>

        <!-- <UAlert v-for="(error, i) in errorsMessage" :key="i" icon="i-heroicons-exclamation-triangle" color="red"
            v-show="errorsMessage" :title="error" class="mt-3" /> -->
        <slot />
      </div>
    </div>
    <CustomSkeleton v-else/>
  </div>
</template>