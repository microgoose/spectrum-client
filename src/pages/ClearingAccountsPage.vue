<template>
  <Card>
    <template #title>
      {{ $t('clearingAccountsPageTitle') }}
    </template>
    <template #content>
      <p>Здесь будут клиринговые счета.</p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
</script>
