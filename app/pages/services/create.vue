<script setup lang="ts">
 import {z} from "zod";

 const { serviceCreate } = useBreadcrumbLinks();

 type Schema  = z.output<typeof serviceSchema>

 const display_error = ref('');
 const display_errors = ref('');

 const another = ref<Service>({})

</script>

<template>
  <div>

    <UBreadcrumb  :links="serviceCreate" />

    <FormWrapper title="Nouveau service" :error-message="display_error" :errors-message="display_errors">

      <UForm :schema="serviceSchema" :state="another" class="space-y-3">

        <UFormGroup class="laptop:">
          <UInput type="text" v-model="another.name" />
        </UFormGroup>

      </UForm>

    </FormWrapper>

  </div>
</template>

<style scoped>

</style>