<template>
  <Card>
    <template #title>
      {{ $t('loginPageTitle') }}
    </template>

    <template #content>
      <LoginForm />
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';

import LoginForm from '@/feature/auth/login-form/ui/LoginForm.vue';
</script>
