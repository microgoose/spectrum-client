<style scoped lang="css">
.notification-list {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

<template>
  <div class="notification-list">
    <template v-if="isPending">
      <Skeleton width="100%" height="100px" />
      <Skeleton width="100%" height="100px" />
      <Skeleton width="100%" height="100px" />
    </template>

    <template v-if="notifications && notifications.length">
      <NotificationItem
        v-for="notification in notifications"
        :key="notification.id"
        :id="notification.id"
        :date="notification.date"
        :title="notification.title"
        :description="notification.description"
      />
    </template>
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'primevue/skeleton';
import { getNotificationsQuery } from '@/service/notification/notification.service.ts';
import NotificationItem from '@/view/entity/notification/NotificationItem.vue';

const { isPending, data: notifications } = getNotificationsQuery();
</script>
