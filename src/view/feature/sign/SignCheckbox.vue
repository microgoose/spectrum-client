<template>
  <div class="flex items-center gap-2">
    <Checkbox v-model="internalShouldSign" inputId="shouldSign" name="shouldSign" binary />

    <div class="flex items-center gap-1">
      <label for="shouldSign">
        {{ $t('signCheckbox.text.withSign') }}
      </label>

      <span v-if="internalShouldSign">
        <template v-if="cert.selectedCert"> ({{ cert.selectedCert.label }}) </template>
        <!-- TODO проработать перенос текста когда очень длинное название (стили) -->
        <button v-else type="button" @click="selectCertificate">
          (<u> {{ $t('signCheckbox.actions.selectCertificate') }} </u>)
        </button>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import Checkbox from 'primevue/checkbox';
import { dialogs } from '@/config/dialog';
import { useDialogStore } from '@/store/app/dialog.store';
import { useCertStore } from '@/store/sign/cert-store';

const props = defineProps<{
  modelValue: boolean;
}>();

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void;
}>();

const dialog = useDialogStore();
const cert = useCertStore();

// Локальное состояние, синхронизированное с modelValue
const internalShouldSign = ref(props.modelValue);

// Следим за изменением modelValue извне
watch(
  () => props.modelValue,
  (newValue) => {
    internalShouldSign.value = newValue;
  },
);

// Следим за изменением internalShouldSign и отправляем наружу
watch(internalShouldSign, (newValue) => {
  emit('update:modelValue', newValue);
});

function selectCertificate() {
  dialog.open(dialogs.SELECT_SIGN_CERTIFICATE);
}
</script>
