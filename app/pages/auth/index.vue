<script setup lang="ts">
import {z} from "zod";
import type {FormSubmitEvent} from "#ui/types";

definePageMeta({
  layout: 'login'
})

 const auth = ref<Auth>({
    email: '',
    password: ''
 })

const showPassword = ref<boolean>(false)

type Schema = z.output<typeof authSchema>

const login = async(event: FormSubmitEvent<Schema>) => {
    navigateTo('/')
}

</script>

<template>
  <!-- component -->
  <div class="flex h-screen">
    <!-- Left Pane -->
    <div class="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
      <div class="max-w-md w-full">
        <img src="assets/images/od_cg_logo.svg" alt="odellya_congo">
      </div>
    </div>
    <!-- Right Pane -->
    <div class="w-full bg-blue-900 lg:w-1/2 flex items-center justify-center">
      <div class="max-w-md w-full p-6">
        <h1 class="text-center text-4xl font-bold mb-6">Connexion</h1>
        <UForm :schema="authSchema" :state="auth" class="space-y-4" @submit="login">
          <UFormGroup label="Adresse mail" name="email">
            <UInput v-model="auth.email" icon="i-heroicons-envelope" size="lg" placeholder="Votre adresse mail" />
          </UFormGroup>
          <UFormGroup label=" Mot de passe" name="password">
            <UInput class="text-white" icon="i-heroicons-lock-closed" required v-model="auth.password"
                    :type="showPassword ? 'text' : 'password'" placeholder="Votre mot de passe" size="lg"
                    :ui="{ icon: { trailing: { pointer: '' } } }">
              <template #trailing>
                <UIcon class="cursor-pointer text-black dark:text-white" size="20"
                       :name="`${showPassword ? 'i-heroicons:eye-slash' : 'i-heroicons:eye'}`"
                       @click="showPassword = !showPassword"/>
              </template>
            </UInput>
          </UFormGroup>
          <UButton type="submit" block size="lg" class="rounded-xl bg-blue-500 uppercase" variant="outline">
            Valider
          </UButton>
        </UForm>
      </div>
    </div>
  </div>

</template>

<style scoped>

</style>