<template>
  <Card>
    <template #title>
      {{ $t('organizationPageTitle') }}
    </template>
    <template #content>
      <p>Здесь будет организация.</p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
</script>
