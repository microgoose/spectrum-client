<template>
  <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
    <DatePicker
      :invalid="!!error"
      :modelValue="modelValue"
      @update:modelValue="(val) => $emit('update:modelValue', val)"
    />
    <label>{{ label }}</label>
    <Message v-if="error" severity="error" size="small" variant="simple">
      {{ error }}
    </Message>
  </IftaLabel>
</template>

<script setup lang="ts">
import DatePicker from 'primevue/datepicker';
import IftaLabel from 'primevue/iftalabel';
import Message from 'primevue/message';

defineProps<{
  modelValue: Date | Date[] | (Date | null)[] | null | undefined;
  error?: string;
  label: string;
}>();

defineEmits(['update:modelValue']);
</script>
