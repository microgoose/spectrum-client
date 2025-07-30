<template>
  <div class="flex items-center flex-column gap-4 mw-20rem">
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

    <div class="flex flex-column w-full gap-2">
      <Button
        :loading="isLoading"
        @click="onSubmit"
        :disabled="!meta.valid"
        :label="$t('login.action.enter')"
        class="w-full"
        type="submit"
        severity="secondary"
        size="large"
      />

      <Message v-if="error" severity="error" size="small" variant="simple">
        {{ error }}
      </Message>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { toTypedSchema } from '@vee-validate/zod';
import Button from 'primevue/button';
import Message from 'primevue/message';
import { useField, useForm } from 'vee-validate';
import { loginValidationScheme } from '@/model/user/login-validation-scheme.ts';
import { login } from '@/service/auth/login.service.ts';
import InputField from '@/shared/components/input-field/InputField.vue';
import { toError } from '@/shared/lib/error-util';

const isLoading = ref(false);
const error = ref('');
const { meta, handleSubmit } = useForm({
  validationSchema: toTypedSchema(loginValidationScheme),
});

const { value: usernameValue, errorMessage: usernameError } = useField<string>('user');
const { value: passwordValue, errorMessage: passwordError } = useField<string>('password');

const onSubmit = handleSubmit(async (data) => {
  isLoading.value = true;

  try {
    if (meta.value.valid) await login(data);
  } catch (err: Error | unknown) {
    error.value = toError(err).message;
  } finally {
    isLoading.value = false;
  }
});
</script>
