<style scoped>
.dialog-container {
  text-align: center;
  padding: 2rem;
}

.dialog-title {
  font: var(--font-h2-bold);
  margin-bottom: 0.5rem;
}

.dialog-message {
  margin-bottom: 4rem;
  font: var(--font-text);
}

.confirm-button {
  padding: 0.75rem 3rem;
  font: var(--font-h2-bold);
  min-width: 200px;
}
</style>

<template>
  <div class="dialog-container">
    <h3 class="dialog-title">{{ $t('cancelApplication.title') }}</h3>
    <p class="dialog-message">{{ $t('cancelApplication.message') }}</p>
    <Button @click="dialog.close(true)" class="confirm-button">
      {{ $t('cancelApplication.confirmButton') }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import { useDialogStore } from '@/store/app/dialog.store.ts';

const dialog = useDialogStore();
</script>
