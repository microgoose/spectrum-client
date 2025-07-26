<template>
  <div class="field" :class="{ 'field-w-full': fullWidth }">
    <label class="h4-bold">{{ label }}</label>
    <span class="text">{{ value || '-' }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value: string | number | null | undefined;
  fullWidth?: boolean;
}>();
</script>
