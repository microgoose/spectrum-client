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
      <div class="notification-container">
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
import { ref } from 'vue';

import Button from 'primevue/button';
import Card from 'primevue/card';

import { getNotification } from '@/api/notification.api.ts';

const props = defineProps<{ id: string }>();

const notification = ref({});

getNotification(props.id).then((n) => (notification.value = n));

function onAcknowledge() {
  alert(notification.value.title);
}
</script>
