<script setup lang="ts">
import Button from 'primevue/button';
import Card from 'primevue/card';

// const notificationId = useRoute().params.id;
//
// const notification

function onAcknowledge() {
  alert('Уведомление подтверждено: ' + notification.value.title);
}
</script>

<template>
  <Card>
    <template #content>
      <!--      <div class="date">{{ notification.date }}</div>-->
      <!--      <h3 class="title">{{ notification.title }}</h3>-->
      <!--      <p class="description">{{ notification.description }}</p>-->
      <!--      <pre class="message">{{ notification.message }}</pre>-->
      <!--      <Button label="Понятно" @click="onAcknowledge" />-->
    </template>
  </Card>
</template>

<style scoped lang="css">
.date {
  font-size: 0.9rem;
  color: var(--p-text-muted-color);
  margin-bottom: 0.5rem;
}

.title {
  font-size: 1.2rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.description {
  margin-bottom: 1rem;
  white-space: normal;
}

.message {
  margin-bottom: 1rem;
  white-space: pre-wrap;
  font-family: inherit;
}

button {
  margin-top: 1rem;
}
</style>
