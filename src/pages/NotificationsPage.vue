<template>
  <PageTitle :title="$t('notificationsPageTitle')" />
  <NotificationList />
</template>

<script setup lang="ts">
import NotificationList from '@/entity/notification/ui/NotificationList.vue';
import PageTitle from '@/shared/components/PageTitle.vue';
</script>
