<style scoped lang="css">
.error-message {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
}
</style>

<template>
  <DefaultContentLayout>
    <template #content>
      <div class="error-message">
        <p>{{ $t('notFoundPage.text.description') }}</p>
        <Button @click="pushPage(Routes.HOME)" :label="$t('actions.backToHome')" />
      </div>
    </template>
  </DefaultContentLayout>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import { Routes } from '@/config/router.ts';
import { pushPage } from '@/service/app/route.service.ts';
import DefaultContentLayout from '@/view/layout/default/DefaultContentLayout.vue';
</script>
