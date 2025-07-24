<style scoped lang="css">
.organization-page-container {
  display: flex;
  width: 100%;
  justify-content: center;
}

.organization-page-content {
  display: flex;
  flex-direction: column;
  width: 800px;
  align-items: center;
  gap: 1rem;
}
.organization-page-title {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 33px;
  text-align: left;
}
</style>

<template>
  <div class="organization-page-container">
    <div class="organization-page-content">
      <PageTitle class="organization-page-title">
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
      </PageTitle>

      <OrganizationWidget :isEditMode="isEditMode" @submit="isEditMode = false" />
    </div>
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
import { Dialogs } from '@/config/dialog.ts';
import PageTitle from '@/shared/components/PageTitle.vue';
import { useDialogStore } from '@/store/app/dialog.store.ts';
import OrganizationCancelCreationConfirmation from '@/view/feature/organization/OrganizationCancelCreationConfirmation.vue';
import OrganizationWidget from '@/view/widget/organization/OrganizationWidget.vue';

const dialog = useDialogStore();
const isEditMode = ref(false);

const onCancelEdit = () => {
  dialog.close(Dialogs.ORGANIZATION_CANCEL_CREATION_CONFIRMATION);
  isEditMode.value = false;
};
</script>
