<template>
  <DocumentFileForm @submit="handleSubmit" />
</template>

<script setup lang="ts">
import { dialogs } from '@/config/dialog.ts';
import { useDialogStore } from '@/store/app/dialog.store.ts';
import DocumentFileForm from '@/view/entity/document/DocumentFileForm.vue';

const emit = defineEmits<{ submit: [] }>();

const dialog = useDialogStore();

function handleSubmit(comment: string, files: File[], isSigningEnabled: boolean) {
  dialog.open(dialogs.SEND_DOCUMENT_SUCCESS);
  emit('submit');
}
</script>
