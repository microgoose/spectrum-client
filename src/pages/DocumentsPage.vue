<template>
  <Card>
    <template #title>
      {{ $t('documentsPageTitle') }}
    </template>
    <template #content>
      <p>Здесь будут документы.</p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
</script>
