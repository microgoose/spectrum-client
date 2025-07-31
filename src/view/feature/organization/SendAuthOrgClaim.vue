<template>
  <OrganizationForm
    :initialValues="initialValues"
    :taxationOptions="taxationOptions"
    @submit="onSubmit"
  />
</template>

<script setup lang="ts">
import { dialogs } from '@/config/dialog.ts';
import type { OrganizationType } from '@/model/organization/organization.types.ts';
import { openError } from '@/service/app/error.service.ts';
import { sendOrganizationClaim } from '@/service/claim/claim.service.ts';
import { useDialogStore } from '@/store/app/dialog.store.ts';
import OrganizationForm from '@/view/entity/organization/OrganizationForm.vue';

const emits = defineEmits(['submit']);
defineProps<{ initialValues: OrganizationType }>();
const dialog = useDialogStore();

const onSubmit = async (organization: OrganizationType, withSign: boolean) => {
  try {
    await sendOrganizationClaim(organization, withSign);
    emits('submit');
    dialog.open(dialogs.CLAIM_SENT);
  } catch (err) {
    //Используем сервис для вызова диалогового окна об ошибке.
    openError(err);
  }
};

// TODO: данные с бэкенда
const taxationOptions = [
  { value: 1, label: 'Общая' },
  { value: 2, label: 'Упрощённая' },
];
</script>
