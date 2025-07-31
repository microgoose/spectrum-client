<template>
  <div class="flex flex-column items-center gap-3 w-50rem">
    <BlockTitle>
      {{ $t('organizationPage.title') }}
      <Button v-show="!isEditMode" :label="$t('actions.edit')" @click="onEditOpen" />
      <Button
        v-show="isEditMode"
        :label="$t('actions.cancel')"
        severity="secondary"
        @click="onEditCancel"
      />
    </BlockTitle>

    <Card v-if="organization" class="w-full">
      <template #content>
        <SendAuthOrgClaim v-if="isEditMode" :initial-values="organization" @submit="onSubmit" />
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
import SendAuthOrgClaim from '@/view/feature/organization/SendAuthOrgClaim.vue';

const { data: organization } = getAuthOrganizationQuery();
const dialog = useDialogStore();
const isEditMode = ref(false);

const onEditOpen = () => {
  isEditMode.value = true;
};

const onEditCancel = async () => {
  const result = await dialog.open(dialogs.CLAIM_CANCEL);

  if (result) {
    isEditMode.value = false;
  }
};

const onSubmit = () => {
  isEditMode.value = false;
};
</script>
