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
    <Notification :id="notificationId" />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import PageTitle from '@/shared/components/PageTitle.vue';
import Notification from '@/view/entity/notification/Notification.vue';

const route = useRoute();

const notificationId = computed(() => {
  const id = route.params.id;
  return Array.isArray(id) ? id[0] : id;
});
</script>
