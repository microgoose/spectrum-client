<template>
  <FormGridView>
    <FieldView :label="$t('userView.fields.login')" :value="user.login" />
    <FieldView :label="$t('userView.fields.name')" :value="user.name" />
    <FieldView :label="$t('userView.fields.surname')" :value="user.surname" />
    <FieldView :label="$t('userView.fields.patronymic')" :value="user.patronymic" />

    <Divider />

    <FieldView :label="$t('userView.fields.email')" :value="user.email" />
    <FieldView :label="$t('userView.fields.phone')" :value="user.phone" />
    <FieldView :label="$t('userView.fields.inn')" :value="user.inn" />
  </FormGridView>
</template>

<script setup lang="ts">
import Divider from 'primevue/divider';
import type { UserType } from '@/api/user/user.types.ts';
import FieldView from '@/shared/components/form/FieldView.vue';
import FormGridView from '@/shared/components/form/FormGridView.vue';

defineProps<{ user: UserType }>();
</script>
