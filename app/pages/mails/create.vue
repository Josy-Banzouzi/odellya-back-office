<script setup lang="ts">
  import {z} from "zod";
  const { mailCreate } = useBreadcrumbLinks();

  type Schema = z.output<typeof mailSchema>

  const display_error = ref('')
  const display_errors = ref('')

  const mail = ref<MailPlan>({})

</script>

<template>
  <div>

    <UBreadcrumb :links="mailCreate" />

    <FormWrapper title="Nouvel hebergement mail" :errors-message="display_errors" :error-message="display_error">

      <UForm :schema="mailSchema" :state="mail" class="space-y-3">

        <div class="flex gap-x-2">
          <UFormGroup class="laptop:w-full w-1/2" label="Nom">
            <UInput type="text" required v-model="mail.name" size="lg" placeholder="nom de l'hebergement"/>
          </UFormGroup>

          <UFormGroup class="laptop:w-full w-1/2" label="Nombre de mail">
            <UInput type="text" required v-model="mail.mailNumber" size="lg" placeholder="Nombre de mail"/>
          </UFormGroup>
        </div>

        <div class="flex gap-x-2">
          <UFormGroup class="laptop:w-full w-1/2" label="">
            <UInput type="text" required v-model="mail.name" size="lg" placeholder="nom de l'hebergement"/>
          </UFormGroup>

          <UFormGroup class="laptop:w-full w-1/2">
            <UInput type="text" required v-model="mail.mailNumber" size="lg" placeholder="Nombre de mail"/>
          </UFormGroup>
        </div>

        <div class="flex gap-x-2">
          <UFormGroup class="laptop:w-full w-1/2">
            <UInput type="text" required v-model="mail.name" size="lg" placeholder="nom de l'hebergement"/>
          </UFormGroup>

          <UFormGroup class="laptop:w-full w-1/2">
            <UInput type="text" required v-model="mail.mailNumber" size="lg" placeholder="Nombre de mail"/>
          </UFormGroup>
        </div>

        <div class="flex gap-x-2">
          <UFormGroup class="laptop:w-full w-1/2">
            <UInput type="text" required v-model="mail.name" size="lg" placeholder="nom de l'hebergement"/>
          </UFormGroup>

          <UFormGroup class="laptop:w-full w-1/2">
            <UInput type="text" required v-model="mail.mailNumber" size="lg" placeholder="Nombre de mail"/>
          </UFormGroup>
        </div>


        <div class="flex gap-x-2 justify-end">
          <UButton type="reset" color="red"
                   class="px-6 py-2 flex justify-center font-medium capitalize rounded-lg border-0" @click="navigateTo('/mails')">
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