<template>
  <Card>
    <template #title>
      {{ $t('loginPage.title') }}
    </template>

    <template #content>
      <LoginForm />
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import LoginForm from '@/view/feature/auth/LoginForm.vue';
</script>
