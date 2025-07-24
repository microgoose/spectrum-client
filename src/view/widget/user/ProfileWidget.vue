<style scoped lang="css">
.profile-widget {
  display: flex;
  flex-direction: column;
  width: 800px;
  align-items: center;
  gap: 1rem;
}
</style>

<template>
  <div class="profile-widget">
    <BlockTitle>
      {{ $t('profilePageTitle') }}

      <Button
        v-show="!isEditMode"
        :label="$t('organization.actions.edit')"
        @click="isEditMode = true"
      />
      <Button
        v-show="isEditMode"
        :label="$t('organization.actions.cancel')"
        severity="secondary"
        @click="isEditMode = false"
      />
    </BlockTitle>

    <Card v-if="user" style="width: 100%;">
      <template #content>
        <UserForm v-if="isEditMode" :user="user" />
        <UserView v-else :user="user" />
      </template>
    </Card>
    <Skeleton v-else width="100%" height="250px" />
  </div>

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
import { ref } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Skeleton from 'primevue/skeleton';
import { Dialogs } from '@/config/dialog.ts';
import { getAuthUserQuery } from '@/service/user/user.service.ts';
import BlockTitle from '@/shared/components/BlockTitle.vue';
import { useDialogStore } from '@/store/app/dialog.store.ts';
import ConfirmLogout from '@/view/feature/auth/ConfirmLogout.vue';
import UserForm from '@/view/feature/user/UserForm.vue';
import UserView from '@/view/entity/user/UserView.vue';

const { data: user } = getAuthUserQuery();
const dialog = useDialogStore();
const isEditMode = ref(false);
</script>
