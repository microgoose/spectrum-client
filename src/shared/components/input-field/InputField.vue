<template>
  <IftaLabel class="flex flex-column gap-2 w-full">
    <InputText
      :type="type"
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
import type { InputTypeHTMLAttribute } from 'vue';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';

defineEmits(['update:modelValue']);
defineProps<{
  error?: string;
  type?: InputTypeHTMLAttribute;
  modelValue?: string | null;
  label: string;
}>();
</script>
