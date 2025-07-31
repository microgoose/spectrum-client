<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 2rem;
}
</style>

<template>
  <div :class="$style.container">
    <h2>{{ $t('confirmLogoutDialog.text.logoutConfirm') }}</h2>
    <Button :label="$t('actions.logout')" @click="dialog.close(true)" />
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import { useDialogStore } from '@/store/app/dialog.store.ts';

const dialog = useDialogStore();
</script>
