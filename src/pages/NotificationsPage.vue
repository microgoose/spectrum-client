<template>
  <Card>
    <template #title>
      {{ $t('notificationsPageTitle') }}
    </template>
    <template #content>
      <p>Здесь будут уведомления.</p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
</script>
