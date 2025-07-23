<style scoped lang="css">
.notification-container {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.date {
  font: var(--font-subtitle);
  color: var(--p-text-muted-color);
}

.title {
  font: var(--font-h2-bold);
}

.description {
  font: var(--font-text);
}

.message {
  font: var(--font-text);
}
</style>

<template>
  <Card>
    <template #content>
      <template v-if="isPending">
        <div class="notification-container">
          <Skeleton width="100px" height="1rem" />
          <Skeleton width="200px" height="2rem" />
          <Skeleton width="200px" height="1rem" />
          <Skeleton width="200px" height="1rem" />
        </div>
      </template>

      <div class="notification-container" v-else-if="notification">
        <div class="date">{{ notification.date }}</div>
        <h3 class="title">{{ notification.title }}</h3>
        <p class="description">{{ notification.description }}</p>
        <pre class="message">{{ notification.message }}</pre>
      </div>
    </template>

    <template #footer>
      <Button :label="$t('notification.action.understood')" @click="onAcknowledge" />
    </template>
  </Card>
</template>

<script setup lang="ts">
import { useQuery } from '@tanstack/vue-query';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Skeleton from 'primevue/skeleton';
import { getNotification } from '@/api/notification.api.ts';

const props = defineProps<{ id: string }>();

const { isPending, data: notification } = useQuery({
  queryKey: ['notification-' + props.id],
  queryFn: () => getNotification(props.id),
  throwOnError: true,
});

//TODO
function onAcknowledge() {
  alert(notification?.value?.title);
}
</script>
