<script setup lang="ts">
  import {z} from "zod";

  const { agentCreate } = useBreadcrumbLinks();

  const user = ref<User>({
    name: '',
    firstName: '',
    email: '',
    password:''
  })

  const showPassword = ref<boolean>(false)
  
  type Schema = z.output<typeof userSchema>

  const display_error = ref('')

  const display_errors = ref('')

</script>

<template>
  <div>
     <UBreadcrumb :links="agentCreate"/>

    <FormWrapper title="Nouvel Agent"  :errors-message="display_errors" :error-message="display_error">

      <UForm :schema="userSchema" :state="user" class="space-y-3">

        <div class="flex gap-x-2">
          <UFormGroup class="laptop:w-full w-1/2" label="Nom" name="nom">
            <UInput required v-model="user.name" size="lg" placeholder="Nom" icon="i-heroicons-user-circle" />
          </UFormGroup>

          <UFormGroup class="laptop:w-full w-1/2" label="Prénom" name="prenom">
            <UInput required v-model="user.firstName" size="lg" placeholder="Prénom" icon="i-heroicons-user" />
          </UFormGroup>
        </div>

        <div class="flex gap-x-2">
          <UFormGroup class="laptop:w-full w-1/2" label="Adresse mail" name="email">
            <UInput required v-model="user.email" size="lg" placeholder="adresse mail" icon="i-heroicons-envelope" />
          </UFormGroup>

          <UFormGroup label=" Mot de passe" name="password" class="laptop:w-full w-1/2">
            <UInput class="text-white" icon="i-heroicons-lock-closed" required v-model="user.password"
                    :type="showPassword ? 'text' : 'password'" placeholder="Votre mot de passe" size="lg"
                    :ui="{ icon: { trailing: { pointer: '' } } }">
              <template #trailing>
                <UIcon class="cursor-pointer text-black dark:text-white" size="20"
                       :name="`${showPassword ? 'i-heroicons:eye-slash' : 'i-heroicons:eye'}`"
                       @click="showPassword = !showPassword"/>
              </template>
            </UInput>
          </UFormGroup>
        </div>

        <div class="flex gap-x-2 justify-end">
          <UButton type="reset" color="red"
                   class="px-6 py-2 flex justify-center font-medium capitalize rounded-lg border-0" @click="navigateTo('/agents')">
            Annuler
          </UButton>

          <UButton type="submit" color="primary"
                   class="px-6 py-2 flex justify-center font-medium capitalize rounded-lg border-0">
            Soumettre
          </UButton>
        </div>

      </UForm>
    </FormWrapper>
  </div>
</template>

<style scoped>

</style>