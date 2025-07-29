<template>
  <div class="flex flex-column gap-3">
    <span class="text-400 subtext">{{ label }}</span>

    <div class="flex gap-2">
      <template v-for="option in options" :key="option.value">
        <RadioButton
          :invalid="!!error"
          :value="option.value"
          :modelValue="modelValue"
          @update:modelValue="(val) => $emit('update:modelValue', val)"
        />

        <label>{{ option.label }}</label>
      </template>
    </div>

    <Message v-if="error" severity="error" size="small" variant="simple">
      {{ error }}
    </Message>
  </div>
</template>

<script setup lang="ts">
import Message from 'primevue/message';
import RadioButton from 'primevue/radiobutton';

interface Option {
  label: string;
  value: string | number;
}

defineEmits(['update:modelValue']);
defineProps<{
  error?: string;
  modelValue?: string | number;
  label: string;
  options: Option[];
}>();
</script>
