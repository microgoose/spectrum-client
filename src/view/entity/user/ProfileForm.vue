<template>
  <form class="flex flex-column gap-5" @submit.prevent="$emit('submit')">
    <fieldset class="grid grid-cols-2 gap-3">
      <legend class="h2-bold pb-3">{{ $t('userForm.fieldset.main') }}</legend>

      <InputField name="login" :label="$t('userForm.fields.login')" class="col-span-1" />

      <InputField name="surname" :label="$t('userForm.fields.surname')" class="col-span-1" />

      <InputField name="name" :label="$t('userForm.fields.name')" class="col-span-1" />

      <InputField name="patronymic" :label="$t('userForm.fields.patronymic')" class="col-span-1" />
    </fieldset>

    <Divider />

    <fieldset class="grid grid-cols-2 gap-3">
      <legend class="h2-bold pb-3">{{ $t('userForm.fieldset.contacts') }}</legend>

      <InputField name="email" :label="$t('userForm.fields.email')" class="col-span-1" />

      <InputField name="phone" :label="$t('userForm.fields.phone')" class="col-span-1" />

      <InputField name="inn" :label="$t('userForm.fields.inn')" class="col-span-1" />
    </fieldset>

    <div class="flex gap-4 w-full">
      <Button type="submit" :label="$t('actions.send')" :disabled="!meta.valid" />
      <SignCheckbox v-model="isSigningEnabled" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { toTypedSchema } from '@vee-validate/zod';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import { useForm } from 'vee-validate';
import { profileZod } from '@/model/user/profile.zod.ts';
import type { UserType } from '@/model/user/user.types.ts';
import InputField from '@/shared/components/input-field/InputField.vue';
import SignCheckbox from '@/view/feature/sign/SignCheckbox.vue';

defineEmits(['submit']);
const props = defineProps<{ initialValues: UserType }>();

const isSigningEnabled = ref(false);
const { meta } = useForm({
  validationSchema: toTypedSchema(profileZod),
  initialValues: {
    ...props.initialValues,
  },
});
</script>
