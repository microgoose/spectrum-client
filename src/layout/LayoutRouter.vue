<template>
  <component v-if="route.name" :is="layout">
    <router-view />
  </component>
</template>

<script setup lang="ts">
import { computed, watch } from 'vue';
import { useRoute } from 'vue-router';
import { layouts } from '@/config/layouts';
import { setPageTitle } from '@/service/route.service';

const route = useRoute();

const layout = computed(() => {
  const name = route.meta.layout as keyof typeof layouts;
  return layouts[name] || layouts.default;
});

watch(
  () => route.meta.titleKey,
  () => setPageTitle(route),
  { immediate: true },
);
</script>
