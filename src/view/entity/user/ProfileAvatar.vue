<template>
  <Avatar v-if="avatar" :image="avatar" shape="circle" />
  <i v-else class="pi pi-user" />
</template>

<script setup lang="ts">
import Avatar from 'primevue/avatar';

defineProps<{
  avatar: string | null;
}>();
</script>
