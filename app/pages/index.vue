<template>
  <div>
    <div class="flex space-x-3 ">
       <CardHome title="Domaines reservés" color="bg-gray-200" icon="tabler:cloud" :account="8"/>
       <CardHome title="Heberegement web en cours" color="bg-green-300" icon="tabler:building-bank" :account="5"/>
       <CardHome title="Hebergement mail en cours" color="bg-red-300" icon="tabler:mail" :account="10"/>
    </div>
    <div class="flex space-x-3 py-2">
      <CardHome title="Agents" color="bg-yellow-200" icon="" :account="8"/>
      <CardHome title="Clients" color="bg-amber-100" icon="" :account="60"/>
      <CardHome title="Commandes validé" color="bg-blue-100" icon="" :account="60"/>
    </div>

<!--    <div class="py-5">-->
<!--      <UCard>-->
<!--        <template #header>-->
<!--          <Placeholder class="h-8" />-->
<!--        </template>-->

<!--        <Placeholder class="h-32" />-->

<!--        <template #footer>-->
<!--          <Placeholder class="h-8" />-->
<!--        </template>-->
<!--      </UCard>-->
<!--    </div>-->

  </div>
</template>
<script setup lang="ts">
</script>