<template>
  <ProfileForm :initialValues="initialValues" @submit="onSubmit" />
</template>

<script setup lang="ts">
import { dialogs } from '@/config/dialog.ts';
import type { UserType } from '@/model/user/user.types.ts';
import { useDialogStore } from '@/store/app/dialog.store.ts';
import ProfileForm from '@/view/entity/user/ProfileForm.vue';

const emits = defineEmits(['submit']);
defineProps<{ initialValues: UserType }>();

const dialog = useDialogStore();

const onSubmit = () => {
  emits('submit');
  dialog.open(dialogs.CLAIM_SENT);
};
</script>
