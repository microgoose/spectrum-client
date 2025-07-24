<template>
  <Card>
    <template #title>
      {{ $t('sendDocumentPageTitle') }}
    </template>
    <template #content>
      <p>Здесь будет отправка документов.</p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
</script>
