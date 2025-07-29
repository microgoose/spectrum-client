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

      <Button v-show="!isEditMode" :label="$t('organization.actions.edit')" @click="onEditOpen" />
      <Button
        v-show="isEditMode"
        :label="$t('organization.actions.cancel')"
        severity="secondary"
        @click="onEditClose"
      />
    </BlockTitle>

    <Card v-if="user" class="w-full">
      <template #content>
        <ProfileForm v-if="isEditMode" :user="user" @submit="onSubmit" />
        <UserView v-else :user="user" />
      </template>
    </Card>
    <Skeleton v-else width="100%" height="250px" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Skeleton from 'primevue/skeleton';
import { dialogs } from '@/config/dialog.ts';
import { getAuthUserQuery } from '@/service/user/user.service.ts';
import BlockTitle from '@/shared/components/BlockTitle.vue';
import { useDialogStore } from '@/store/app/dialog.store.ts';
import UserView from '@/view/entity/user/UserView.vue';
import ProfileForm from '@/view/feature/user/ProfileForm.vue';

const dialog = useDialogStore();
const { data: user } = getAuthUserQuery();
const isEditMode = ref(false);

const onEditOpen = () => {
  isEditMode.value = true;
};

const onEditClose = async () => {
  const result = await dialog.open(dialogs.CLAIM_CANCEL);

  if (result) {
    isEditMode.value = false;
  }
};

const onSubmit = () => {
  isEditMode.value = false;
  dialog.open(dialogs.CLAIM_SENT);
};
</script>
