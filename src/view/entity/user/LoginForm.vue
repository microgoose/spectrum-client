<template>
  <form class="flex items-center flex-column gap-4 mw-20rem" @submit.prevent="onSubmit">
    <InputField
      v-model="usernameValue"
      :error="usernameError"
      :label="$t('loginForm.placeholder.username')"
      type="text"
      class="w-20rem"
    />

    <InputField
      v-model="passwordValue"
      :error="passwordError"
      :label="$t('loginForm.placeholder.password')"
      type="password"
      class="w-20rem"
    />

    <div class="flex flex-column w-full gap-2">
      <Button
        :loading="isLoading"
        :disabled="!meta.valid"
        :label="$t('actions.enter')"
        class="w-full"
        type="submit"
        severity="secondary"
        size="large"
      />

      <Message v-if="error" severity="error" size="small" variant="simple">
        {{ error }}
      </Message>
    </div>
  </form>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import Button from 'primevue/button';
import Message from 'primevue/message';
import { useField, useForm } from 'vee-validate';
import type { LoginData } from '@/model/auth/auth.types.ts';
import { loginValidationScheme } from '@/model/user/login.validation-scheme.ts';
import InputField from '@/shared/components/input-field/InputField.vue';

const emit = defineEmits<{ submit: [LoginData] }>();
defineProps<{
  isLoading: boolean;
  error: string;
}>();

const { meta, handleSubmit } = useForm({
  validationSchema: toTypedSchema(loginValidationScheme),
});

const { value: usernameValue, errorMessage: usernameError } = useField<string>('username');
const { value: passwordValue, errorMessage: passwordError } = useField<string>('password');

const onSubmit = handleSubmit((data: LoginData) => {
  if (meta.value.valid) emit('submit', data);
});
</script>
