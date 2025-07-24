<template>
  <div class="field" :class="{ 'full-width': fullWidth }">
    <label>{{ label }}</label>
    <span>{{ value || '-' }}</span>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  label: string;
  value: string | number | null | undefined;
  fullWidth?: boolean;
}>();
</script>

<style scoped lang="scss">
.field {
  display: flex;
  flex-direction: column;
  flex: 1 1 300px;

  label {
    font: var(--font-text-bold);
    margin-bottom: 4px;
  }
}

.full-width {
  flex: 1 1 100%;
}
</style>
