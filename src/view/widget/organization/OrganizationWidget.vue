<template>
  <Skeleton v-if="isPending" width="100%" height="600px" />

  <template v-else-if="organization">
    <OrganizationForm :organization="organization" v-if="isEditMode" @submit="$emit('submit')" />
    <OrganizationView :organization="organization" v-else />
  </template>
</template>

<script setup lang="ts">
import Skeleton from 'primevue/skeleton';
import { getAuthOrganizationQuery } from '@/service/organization/organization.service.ts';
import OrganizationView from '@/view/entity/organization/OrganizationView.vue';
import OrganizationForm from '@/view/feature/organization/OrganizationForm.vue';

defineProps<{ isEditMode: boolean }>();
defineEmits(['submit']);

const { isPending, data: organization } = getAuthOrganizationQuery();
</script>
