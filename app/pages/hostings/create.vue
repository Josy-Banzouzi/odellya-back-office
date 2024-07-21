<script setup lang="ts">
  import {z} from "zod";

  const { hostingCreate } = useBreadcrumbLinks();

  const display_error = ref('')

  const display_errors = ref('')

  type HostingSchema = z.output<typeof hostingSchema>

  const hosting = ref<HostingPlan>({
    // name: '',
    // domainNumber: 0,
    // diskSpaceGB: 0,
    // hostedWebsites: 0,
    // hostedDomains: 0,
    // unlimitedSubdomains: 0,
    // ftpAccess: 0,
    // mysqlDatabases: 0,
    // emailAccounts: 0,
    // emailAccountStorageGB: 0,
    // unlimitedBandwidth: false,
    // priceExclTax: 0.0,
    // price: 0.0,
  })

</script>

<template>
  <div>

    <UBreadcrumb :links="hostingCreate" />

    <FormWrapper title="Nouvel hebergement" :error-message="display_error" :errors-message="display_errors">

      <UForm :schema="hostingSchema" :state="hosting" class="space-y-3">

        <UFormGroup class="laptop:w-full" label="Nom" name="nom">
          <UInput required v-model="hosting.name" size="lg" placeholder="Nom" icon="i-heroicons-user-circle" />
        </UFormGroup>

        <div class="flex gap-x-2">
          <UFormGroup class="laptop:w-full w-1/2" label="Numbre de domaine" name="domaine">
            <UInput required v-model="hosting.domainNumber" size="lg" placeholder="Numbre de domaine" icon="i-heroicons-user" />
          </UFormGroup>

          <UFormGroup class="laptop:w-full w-1/2" label="Espace disque" name="espace">
            <UInput required v-model="hosting.diskSpaceGB" size="lg" placeholder="Espace disque" icon="i-heroicons-user" />
          </UFormGroup>
        </div>

        <div class="flex gap-x-2">
          <UFormGroup class="laptop:w-full w-1/2" label="Numbre de domaine" name="domaine">
            <UInput required v-model="hosting.hostedWebsites" size="lg" placeholder="Numbre de domaine" icon="i-heroicons-user" />
          </UFormGroup>

          <UFormGroup class="laptop:w-full w-1/2" label="Espace disque" name="espace">
            <UInput required v-model="hosting.hostedDomains" size="lg" placeholder="Espace disque" icon="i-heroicons-user" />
          </UFormGroup>
        </div>

        <div class="flex gap-x-2">
          <UFormGroup class="laptop:w-full w-1/2" label="Numbre de domaine" name="domaine">
            <UInput required :v-model="hosting.unlimitedBandwidth" size="lg" placeholder="Numbre de domaine" icon="i-heroicons-user" />
          </UFormGroup>

          <UFormGroup class="laptop:w-full w-1/2" label="Espace disque" name="espace">
            <UInput required v-model="hosting.unlimitedSubdomains" size="lg" placeholder="Espace disque" icon="i-heroicons-user" />
          </UFormGroup>
        </div>

        <div class="flex gap-x-2">
          <UFormGroup class="laptop:w-full w-1/2" label="Numbre de domaine" name="domaine">
            <UInput required v-model="hosting.ftpAccess" size="lg" placeholder="Numbre de domaine" icon="i-heroicons-user" />
          </UFormGroup>

          <UFormGroup class="laptop:w-full w-1/2" label="Espace disque" name="espace">
            <UInput required v-model="hosting.mysqlDatabases" size="lg" placeholder="Espace disque" icon="i-heroicons-user" />
          </UFormGroup>
        </div>

        <div class="flex gap-x-2 justify-end">
          <UButton type="reset" color="red"
                   class="px-6 py-2 flex justify-center font-medium capitalize rounded-lg border-0" @click="navigateTo('/hostings')">
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