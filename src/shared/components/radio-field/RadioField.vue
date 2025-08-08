<template>
  <div class="flex flex-column gap-4">
    <span class="text-400 subtext">{{ label }}</span>

    <div class="flex gap-2">
      <template v-for="(option, index) in options" :key="option.value">
        <RadioButton
          :input-id="uuid + index"
          :invalid="!!errorMessage"
          :value="option.value"
          v-model="value"
        />

        <label :for="uuid + index">{{ option.label }}</label>
      </template>
    </div>

    <Message v-if="errorMessage" severity="error" size="small" variant="simple">
      {{ errorMessage }}
    </Message>
  </div>
</template>

<script setup lang="ts">
import Message from 'primevue/message';
import RadioButton from 'primevue/radiobutton';
import { v4 } from 'uuid';
import { useField } from 'vee-validate';

export interface RadioFieldOption {
  label: string;
  value: string | number;
}

defineEmits(['update:modelValue']);
const props = defineProps<{
  name: string;
  label: string;
  options: RadioFieldOption[];
}>();

const uuid = v4();
const { value, errorMessage } = useField<string | number | null | undefined>(props.name);
</script>
