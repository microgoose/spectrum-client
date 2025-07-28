<style scoped lang="css">
.organization-widget {
  display: flex;
  flex-direction: column;
  width: 800px;
  align-items: center;
  gap: 1rem;
}
</style>

<template>
  <div class="organization-widget">
    <BlockTitle>
      {{ $t('organizationPageTitle') }}
      <Button v-show="!isEditMode" :label="$t('organization.actions.edit')" @click="onEditOpen" />
      <Button
        v-show="isEditMode"
        :label="$t('organization.actions.cancel')"
        severity="secondary"
        @click="onEditClose"
      />
    </BlockTitle>

    <Card v-if="organization" class="w-full">
      <template #content>
        <OrganizationForm v-if="isEditMode" :organization="organization" @submit="onSubmit" />
        <OrganizationView v-else :organization="organization" />
      </template>
    </Card>
    <Skeleton v-else width="100%" height="600px" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import Card from 'primevue/card';
import Skeleton from 'primevue/skeleton';
import { dialogs } from '@/config/dialog.ts';
import { getAuthOrganizationQuery } from '@/service/organization/organization.service.ts';
import BlockTitle from '@/shared/components/BlockTitle.vue';
import { useDialogStore } from '@/store/app/dialog.store.ts';
import OrganizationView from '@/view/entity/organization/OrganizationView.vue';
import OrganizationForm from '@/view/feature/organization/OrganizationForm.vue';

const { data: organization } = getAuthOrganizationQuery();
const dialog = useDialogStore();
const isEditMode = ref(false);

const onEditOpen = () => {
  isEditMode.value = true;
};

const onEditClose = async () => {
  const result = await dialog.open(dialogs.ORGANIZATION_CANCEL_CREATION_CONFIRMATION);

  if (result) {
    isEditMode.value = false;
  }
};

const onSubmit = () => {
  isEditMode.value = false;
  dialog.open(dialogs.ORGANIZATION_SENT_NOTICE);
};
</script>
