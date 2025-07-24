<template>
  <Dialog :header="$t(dialog.title)" modal :visible="dialog.isOpen" @update:visible="dialog.close">
    <component :is="dialog.getComponent()" />
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from 'primevue/dialog';
import { useDialogStore } from '@/store/app/dialog.store.ts';

const dialog = useDialogStore();
</script>
