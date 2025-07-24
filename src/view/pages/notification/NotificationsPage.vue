<template>
  <DefaultContentLayout>
    <template #header>
      <ProfilePanel />
    </template>

    <template #content>
      <BlockTitle>
        {{ $t('notificationsPageTitle') }}
      </BlockTitle>
      <NotificationList />
    </template>
  </DefaultContentLayout>
</template>

<script setup lang="ts">
import BlockTitle from '@/shared/components/BlockTitle.vue';
import NotificationList from '@/view/entity/notification/NotificationList.vue';
import ProfilePanel from '@/view/entity/user/ProfilePanel.vue';
import DefaultContentLayout from '@/view/layout/default/DefaultContentLayout.vue';
</script>
