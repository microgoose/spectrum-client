<template>
  <Card>
    <template #title>
      {{ $t('HELLO_WORLD') }}
    </template>
    <template #content>
      <p>{{ $t('HOME_PAGE_CONTENT') }}</p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
</script>
