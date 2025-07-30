<style scoped lang="css">
.message-container {
  min-width: 120px;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
</style>

<template>
  <div class="message-container">
    <p>{{ errorStore.error?.message || $t('errorPage.text.message') }}</p>
  </div>
</template>

<script setup lang="ts">
import { useErrorStore } from '@/store/app/error.store.ts';

const errorStore = useErrorStore();
</script>
