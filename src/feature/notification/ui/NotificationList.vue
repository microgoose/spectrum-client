<style scoped lang="css">
.notification-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

<template>
  <div class="notification-list">
    <template v-if="notifications.length">
      <NotificationItem
        v-for="notification in notifications"
        :key="notification.id"
        :id="notification.id"
        :date="notification.date"
        :title="notification.title"
        :description="notification.description"
      />
    </template>

    <template v-else>
      <Skeleton width="100%" height="100px" />
      <Skeleton width="100%" height="100px" />
      <Skeleton width="100%" height="100px" />
    </template>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import Skeleton from 'primevue/skeleton';

import { getNotifications } from '@/api/notification.api.ts';
import type { NotificationType } from '@/api/types/notification.types.ts';
import NotificationItem from '@/feature/notification/ui/NotificationItem.vue';

const notifications = ref<NotificationType[]>([]);

getNotifications().then(l => notifications.value = Object.values(l));
</script>
