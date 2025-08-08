<template>
  <Card>
    <template #title>
      {{ $t('loginPage.title') }}
    </template>

    <template #content>
      <Login />
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Login from '@/view/feature/auth/LoginAction.vue';
</script>
