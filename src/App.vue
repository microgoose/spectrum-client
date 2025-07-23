<script setup lang="ts">
import Dialog from 'primevue/dialog';
import Toast from 'primevue/toast';
import { Dialogs } from '@/config/dialog.ts';
import ErrorCard from '@/feature/error/ui/ErrorCard.vue';
import LayoutRouter from '@/layout/LayoutRouter.vue';
import { useDialogStore } from '@/store/dialog.store.ts';

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
    <ErrorCard />
  </Dialog>

  <LayoutRouter />
</template>
