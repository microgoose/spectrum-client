<template>
  <LoginForm :error="error" :is-loading="isLoading" @submit="onSubmit" />
</template>

<script setup lang="ts">
import { ref } from 'vue';
import type { LoginData } from '@/model/auth/auth.types.ts';
import { login } from '@/service/auth/login.service.ts';
import { toError } from '@/shared/lib/error-util.ts';
import LoginForm from '@/view/entity/user/LoginForm.vue';

const isLoading = ref(false);
const error = ref('');

const onSubmit = async (data: LoginData) => {
  isLoading.value = true;

  try {
    await login(data);
  } catch (err: Error | unknown) {
    error.value = toError(err).message;
  } finally {
    isLoading.value = false;
  }
};
</script>
