<template>
  <div class="flex flex-column gap-2">
    <IftaLabel>
      <InputText
        :id="uuid"
        :type="type"
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
import type { InputTypeHTMLAttribute } from 'vue';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import { v4 } from 'uuid';

defineEmits(['update:modelValue']);
defineProps<{
  error?: string;
  type?: InputTypeHTMLAttribute;
  modelValue?: string | null;
  label: string;
}>();

const uuid = v4();
</script>
