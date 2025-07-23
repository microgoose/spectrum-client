<template>
  <PageTitle :title="$t('notificationsPageTitle')" />
  <NotificationList />
</template>

<script setup lang="ts">
import PageTitle from '@/shared/components/PageTitle.vue';
import NotificationList from '@/view/entity/notification/NotificationList.vue';
</script>
