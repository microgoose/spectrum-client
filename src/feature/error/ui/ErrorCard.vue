<style scoped lang="css">
.message-container {
  min-width: 120px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
</style>

<template>
  <Card>
    <template #content>
      <div class="message-container">
        <p>{{ errorStore.error?.message || $t('errorPageDefaultMessage') }}</p>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import { useErrorStore } from '@/store/error.store.ts';

const errorStore = useErrorStore();
</script>
