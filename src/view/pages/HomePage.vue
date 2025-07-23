<template>
  <Card>
    <template #title>
      {{ $t('helloWorld') }}
    </template>
    <template #content>
      <p>{{ $t('homePageContent') }}</p>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
</script>
