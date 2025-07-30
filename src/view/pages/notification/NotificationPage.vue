<style scoped lang="css">
.notification-page {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
</style>

<template>
  <DefaultContentLayout>
    <template #header>
      <ProfilePanel />
    </template>

    <template #content>
      <div class="notification-page">
        <BlockTitle>
          {{ $t('notificationPage.title') }}
        </BlockTitle>

        <Notification :id="notificationId" />
      </div>
    </template>
  </DefaultContentLayout>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import BlockTitle from '@/shared/components/BlockTitle.vue';
import Notification from '@/view/entity/notification/Notification.vue';
import ProfilePanel from '@/view/entity/user/ProfilePanel.vue';
import DefaultContentLayout from '@/view/layout/default/DefaultContentLayout.vue';

const route = useRoute();

const notificationId = computed(() => {
  const id = route.params.id;
  return Array.isArray(id) ? id[0] : id;
});
</script>
