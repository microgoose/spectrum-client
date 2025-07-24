<style scoped>
.dialog-container {
  text-align: center;
  padding: 2rem;
}

.dialog-title {
  font: var(--font-h2-bold);
  margin-bottom: 1rem;
}

.dialog-message {
  font: var(--font-text);
  margin-bottom: 2rem;
  line-height: 1.5;
}

.link {
  text-decoration: underline;
  cursor: pointer;
}
</style>

<template>
  <div class="dialog-container">
    <h3 class="dialog-title">{{ $t('applicationSent.title') }}</h3>
    <p class="dialog-message">
      {{ $t('applicationSent.message.pre') }}
      <RouterLink :to="getRoutePath(Routes.APPLICATIONS)" class="link">
        {{ $t('applicationSent.message.link') }}
      </RouterLink>
    </p>
    <Button @click="$emit('confirm')" size="large">
      {{ $t('applicationSent.ok') }}
    </Button>
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import { Routes } from '@/config/router.ts';
import { getRoutePath } from '@/service/app/route.service.ts';

defineEmits(['confirm']);
</script>
