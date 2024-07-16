<script setup lang="ts">

const route = useRoute()

function isActive(path: string){
  return route.path === path;
}

const links = [
  {
    icon: 'tabler:dashboard',
    to: '/',
    title: "Tableau de bord"
  },
  {
    icon: 'tabler:building-bank',
    to: '/hostings',
    title: 'Hebergement web'
  },
  {
    icon: 'tabler:mail',
    to: '/mails',
    title: 'Hebergement mail'
  },
  {
    icon: 'heroicons:wrench-screwdriver',
    to: '/services',
    title: 'Services'
  },
  {
    icon: 'tabler:cloud',
    to: '/domaines',
    title: 'Domaines'
  },
  {
    icon: 'tabler:users-group',
    to: '/users',
    title: 'Utilisateurs'
  },
  {
    icon: 'heroicons:user-group',
    to: '/agents',
    title: 'Agents'
  }
]
</script>

<template>
  <div class="h-screen w-screen flex">
    <div class="h-full w-1/5 bg-blue-950 flex flex-col">
      <div class="h-34 w-full bg-gray-800 flex justify-center py-3 border-b-white border-b-2">
        <div>
          <img src="assets/images/od_icone.svg" alt="odelly-congo" class="object-cover h-24">
          <p class="text-center text-white uppercase py-2">Odellya congo</p>
        </div>
      </div>
      <div class="px-5 py-3 space-y-3">
        <NuxtLink class="h-10 border-white border rounded-xl border-double flex text-white items-center px-5 space-x-3
        hover:bg-blue-700 hover:border-white hover:border-2" v-for="(item, index) in links" :key="index" :to="item.to" :class="{ active: isActive(item.to) }">
          <icon :name="item.icon" size="25"/>
          <span>{{item.title}}</span>
        </NuxtLink>
      </div>
    </div>
    <div class="h-full w-4/5 bg-gray-300 flex flex-col">
      <div class="h-16 bg-white shadow flex items-center justify-between px-4">
        <div class="flex text-black space-x-3 items-center">
          <Icon name="tabler:menu-2" size="30"/>
          <p class="text-black text-3xl font-bold">Tableau de bord</p>
        </div>
        <div class="flex space-x-3 items-center">
          <p class="p-1 rounded-3xl bg-gray-800">
            <Icon name="heroicons:moon" size="30" class="text-white"/>
          </p>
          <p class="p-1 rounded-3xl bg-gray-800">
            <Icon name="ic:baseline-power-settings-new" size="30" class="text-white"/>
          </p>
          <p class="p-2 bg-blue-950 rounded-xl font-semibold">Josy Banzouzi</p>
        </div>
      </div>
      <div class="flex-grow py-5 px-5 text-black">
          <slot/>
      </div>
    </div>
  </div>
</template>

<style scoped>

.active {
  background-color: rgb(29, 78, 216);
}

</style>
