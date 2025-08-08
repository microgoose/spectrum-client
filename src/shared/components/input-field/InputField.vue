<template>
  <div class="flex flex-column gap-2">
    <IftaLabel>
      <InputText :id="uuid" :type="type" :invalid="!!errorMessage" v-model="value" />

      <label :for="uuid">{{ label }}</label>
    </IftaLabel>

    <Message v-if="errorMessage" severity="error" size="small" variant="simple">
      {{ errorMessage }}
    </Message>
  </div>
</template>

<script setup lang="ts">
import type { InputTypeHTMLAttribute } from 'vue';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import { v4 } from 'uuid';
import { useField } from 'vee-validate';

const props = defineProps<{
  name: string;
  label: string;
  type?: InputTypeHTMLAttribute;
}>();

const uuid = v4();
const { value, errorMessage } = useField<string | null | undefined>(props.name);
</script>
