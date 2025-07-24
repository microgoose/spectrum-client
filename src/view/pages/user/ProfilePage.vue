<style scoped>
.logout-button {
  display: flex;
  margin-top: auto;
  justify-content: flex-end;
}
</style>

<template>
  <DefaultContentLayout center-content>
    <template #header>
      <ProfilePanel />
    </template>

    <template #content>
      <ProfileWidget />
    </template>

    <template #footer>
      <div class="logout-button">
        <Button :label="$t('profile.action.logout')" @click="dialog.open(Dialogs.LOGOUT)" />
      </div>
    </template>
  </DefaultContentLayout>

  <Dialog
    :header="$t('profile.text.logoutTitle')"
    modal
    :visible="dialog.isOpen(Dialogs.LOGOUT)"
    @update:visible="dialog.close(Dialogs.LOGOUT)"
  >
    <ConfirmLogout />
  </Dialog>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import { Dialogs } from '@/config/dialog.ts';
import BlockTitle from '@/shared/components/BlockTitle.vue';
import { useDialogStore } from '@/store/app/dialog.store.ts';
import ProfilePanel from '@/view/entity/user/ProfilePanel.vue';
import ConfirmLogout from '@/view/feature/auth/ConfirmLogout.vue';
import DefaultContentLayout from '@/view/layout/default/DefaultContentLayout.vue';
import ProfileWidget from '@/view/widget/user/ProfileWidget.vue';

const dialog = useDialogStore();
</script>
