<template>
  <div class="bg-white dark:bg-gray-800 dark:border-gray-800 dark:text-white mt-5 border border-gray-100 rounded-lg">
    <div class="bg-gray-50 dark:bg-gray-700 p-4">
      <slot name="header" />
    </div>

    <div class="shadow">
      <slot name="content" />

      <div
          class="flex justify-between gap-x-2  p-2 border-t border-t-gray-200 dark:border-t-gray-800 items-center">
        <slot name="footer" />
      </div>
    </div>
  </div>
</template>