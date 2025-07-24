<style scoped>
.dialog-container {
  text-align: center;
  padding: 2rem;
}

.dialog-title {
  font: var(--font-h2-bold);
  margin-bottom: 0.75rem;
}

.dialog-message {
  font: var(--font-text);
  margin-bottom: 2rem;
}
</style>

<template>
  <div class="dialog-container">
    <h3 class="dialog-title">{{ $t('cancelCreation.title') }}</h3>
    <p class="dialog-message">{{ $t('cancelCreation.message') }}</p>
    <Button @click="$emit('confirm')" size="large">
      {{ $t('cancelCreation.confirmButton') }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';

defineEmits(['confirm']);
</script>
