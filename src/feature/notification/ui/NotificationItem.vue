<style scoped lang="css">
.notification-body {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.notification-item__date {
  font: var(--font-subtitle);
  color: var(--p-text-muted-color);
}

.notification-item__title {
  font: var(--font-text-bold);
}

.notification-item__description {
  font: var(--font-text);
}
</style>

<template>
  <RouterLink :to="getRoutePath(Routes.NOTIFICATION, { id })">
    <Panel>
      <template #header>
        <span class="notification-item__date">{{ date }}</span>
      </template>

      <template #default>
        <div class="notification-body">
          <span class="notification-item__title">{{ title }}</span>
          <span class="notification-item__description">{{ description }}</span>
        </div>
      </template>
    </Panel>
  </RouterLink>
</template>

<script setup lang="ts">
import { Panel } from 'primevue';
import { Routes } from '@/config/router.ts';
import { getRoutePath } from '@/service/route.service.ts';

defineProps<{
  id: string;
  date: string;
  title: string;
  description: string;
}>();
</script>
