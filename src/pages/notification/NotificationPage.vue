<style scoped lang="css">
.notification-page {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

<template>
  <div class="notification-page">
    <PageTitle :title="$t('notificationsPageTitle')" />
    <Notification />
  </div>
</template>

<script setup lang="ts">
import Notification from '@/feature/notification/ui/Notification.vue';
import PageTitle from '@/shared/components/PageTitle.vue';
</script>
