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
      <Button
        v-show="!isEditMode"
        :label="$t('organization.actions.edit')"
        @click="isEditMode = true"
      />
      <Button
        v-show="isEditMode"
        :label="$t('organization.actions.cancel')"
        severity="secondary"
        @click="dialog.open(Dialogs.ORGANIZATION_CANCEL_CREATION_CONFIRMATION)"
      />
    </BlockTitle>

    <Card v-if="organization" style="width: 100%;">
      <template #content>
        <OrganizationForm :organization="organization" v-if="isEditMode" @submit="isEditMode = false" />
        <OrganizationView :organization="organization" v-else />
      </template>
    </Card>
    <Skeleton v-else width="100%" height="600px" />
  </div>

  <Dialog
    :header="$t('cancelCreation.title')"
    modal
    :visible="dialog.isOpen(Dialogs.ORGANIZATION_CANCEL_CREATION_CONFIRMATION)"
    @update:visible="dialog.close(Dialogs.ORGANIZATION_CANCEL_CREATION_CONFIRMATION)"
  >
    <OrganizationCancelCreationConfirmation @confirm="onCancelEdit" />
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Skeleton from 'primevue/skeleton';
import { Dialogs } from '@/config/dialog.ts';
import { getAuthOrganizationQuery } from '@/service/organization/organization.service.ts';
import BlockTitle from '@/shared/components/BlockTitle.vue';
import { useDialogStore } from '@/store/app/dialog.store.ts';
import OrganizationView from '@/view/entity/organization/OrganizationView.vue';
import OrganizationCancelCreationConfirmation from '@/view/feature/organization/OrganizationCancelCreationConfirmation.vue';
import OrganizationForm from '@/view/feature/organization/OrganizationForm.vue';
import Card from 'primevue/card';

const { data: organization } = getAuthOrganizationQuery();
const dialog = useDialogStore();
const isEditMode = ref(false);

const onCancelEdit = () => {
  dialog.close(Dialogs.ORGANIZATION_CANCEL_CREATION_CONFIRMATION);
  isEditMode.value = false;
};
</script>
