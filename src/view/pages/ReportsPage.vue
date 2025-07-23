<template>
  <Card>
    <template #title>
      {{ $t('reportsPageTitle') }}
    </template>
    <template #content>
      <p>Здесь будут отчёты.</p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
</script>
