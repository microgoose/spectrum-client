<template>
  <div class="flex flex-column gap-2">
    <IftaLabel>
      <DatePicker
        :input-id="uuid"
        :invalid="!!error"
        :modelValue="modelValue"
        @update:modelValue="(val) => $emit('update:modelValue', val)"
      />
      <label :for="uuid">{{ label }}</label>
    </IftaLabel>
    <Message v-if="error" severity="error" size="small" variant="simple">
      {{ error }}
    </Message>
  </div>
</template>

<script setup lang="ts">
import DatePicker from 'primevue/datepicker';
import IftaLabel from 'primevue/iftalabel';
import Message from 'primevue/message';
import { v4 } from 'uuid';

defineEmits(['update:modelValue']);
defineProps<{
  modelValue: Date | Date[] | (Date | null)[] | null | undefined;
  error?: string;
  label: string;
}>();

const uuid = v4();
</script>
