<template>
  <div class="flex flex-column gap-4">
    <span class="text-400 subtext">{{ label }}</span>

    <div class="flex gap-2">
      <template v-for="(option, index) in options" :key="option.value">
        <RadioButton
          :input-id="uuid + index"
          :invalid="!!error"
          :value="option.value"
          :modelValue="modelValue"
          @update:modelValue="(val) => $emit('update:modelValue', val)"
        />

        <label :for="uuid + index">{{ option.label }}</label>
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
import { v4 } from 'uuid';

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

const uuid = v4();
</script>
