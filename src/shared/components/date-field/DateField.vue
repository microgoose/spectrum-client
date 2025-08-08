<template>
  <div class="flex flex-column gap-2">
    <IftaLabel>
      <DatePicker :input-id="uuid" :invalid="!!errorMessage" v-model="value" />
      <label :for="uuid">{{ label }}</label>
    </IftaLabel>
    <Message v-if="errorMessage" severity="error" size="small" variant="simple">
      {{ errorMessage }}
    </Message>
  </div>
</template>

<script setup lang="ts">
import DatePicker from 'primevue/datepicker';
import IftaLabel from 'primevue/iftalabel';
import Message from 'primevue/message';
import { v4 } from 'uuid';
import { useField } from 'vee-validate';

defineEmits(['update:modelValue']);
const props = defineProps<{
  name: string;
  label: string;
}>();

const uuid = v4();
const { value, errorMessage } = useField<Date | Date[] | (Date | null)[] | null | undefined>(
  props.name,
);
</script>
