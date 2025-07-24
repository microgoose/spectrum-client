<template>
  <ApplicationsTable v-if="applications" :applications="applications" @remove="onRemove" />
  <Skeleton v-else width="100%" height="250px" />

  <Dialog
    modal
    :header="$t('cancelApplication.dialogTitle')"
    :visible="dialogStore.isOpen(Dialogs.CANCEL_APPLICATION)"
    @update:visible="dialogStore.close(Dialogs.CANCEL_APPLICATION)"
  >
    <CancelApplication @confirm="onConfirmRemove" />
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Dialog from 'primevue/dialog';
import Skeleton from 'primevue/skeleton';
import { Dialogs } from '@/config/dialog.ts';
import {
  getApplicationsQuery,
  removeApplication,
} from '@/service/applications/applications.service.ts';
import { useDialogStore } from '@/store/app/dialog.store.ts';
import ApplicationsTable from '@/view/entity/application/ApplicationsTable.vue';
import CancelApplication from '@/view/feature/application/CancelApplication.vue';

const dialogStore = useDialogStore();
const { data: applications } = getApplicationsQuery();
const removeId = ref<string | null>(null);

const onRemove = (id: string) => {
  dialogStore.open(Dialogs.CANCEL_APPLICATION);
  removeId.value = id;
};

const onConfirmRemove = (id: string) => {
  dialogStore.close(Dialogs.CANCEL_APPLICATION);
  removeApplication(id);
};
</script>
