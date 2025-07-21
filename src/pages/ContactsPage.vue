<template>
  <Card>
    <template #title>
      {{ $t('contactsPageTitle') }}
    </template>
    <template #content>
      <p>Здесь будут контакты.</p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
</script>
