<template>
  <div class="flex align-items-center flex-column gap-4 pb-3" @submit.prevent="onSubmit">
    <InputField
      v-model="usernameValue"
      :error="usernameError"
      :label="$t('login.placeholder.username')"
      type="text"
      class="w-20rem"
    />

    <InputField
      v-model="passwordValue"
      :error="passwordError"
      :label="$t('login.placeholder.password')"
      type="password"
      class="w-20rem"
    />

    <Button
      @click="onSubmit"
      :disabled="!meta.valid"
      :label="$t('login.action.enter')"
      class="w-full"
      type="submit"
      severity="secondary"
      size="large"
    />
  </div>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import Button from 'primevue/button';
import { useField, useForm } from 'vee-validate';
import { loginValidationScheme } from '@/model/user/login-validation-scheme.ts';
import { login } from '@/service/auth/login.service.ts';
import InputField from '@/shared/components/input-field/InputField.vue';

const { meta, handleSubmit } = useForm({
  validationSchema: toTypedSchema(loginValidationScheme),
});

const { value: usernameValue, errorMessage: usernameError } = useField<string>('username');
const { value: passwordValue, errorMessage: passwordError } = useField<string>('password');

const onSubmit = handleSubmit((data) => {
  if (meta.value.valid) {
    login();
  }

  console.log('✅ Submitted data:', data);
});
</script>
