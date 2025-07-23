<script setup lang="ts">
import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';
import { Dialogs } from '@/config/dialog.ts';
import { useDialogStore } from '@/store/app/dialog.store.ts';
import ErrorViewer from '@/view/entity/error/ErrorViewer.vue';
import LayoutRouter from '@/view/layout/LayoutRouter.vue';

const dialogStore = useDialogStore();
</script>

<template>
  <Toast />

  <Dialog
    :header="$t('error.text.errorTitle')"
    modal
    :visible="dialogStore.isOpen(Dialogs.ERROR_MESSAGE)"
    @update:visible="dialogStore.close(Dialogs.ERROR_MESSAGE)"
  >
    <ErrorViewer />
  </Dialog>

  <LayoutRouter />
</template>
