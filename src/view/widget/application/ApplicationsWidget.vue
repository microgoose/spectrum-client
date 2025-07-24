<template>
  <ApplicationsTable v-if="applications" :applications="applications" @remove="removeApplication" />
  <Skeleton v-else width="100%" height="250px" />
</template>

<script setup lang="ts">
import Skeleton from 'primevue/skeleton';
import {
  getApplicationsQuery,
  removeApplication,
} from '@/service/applications/applications.service.ts';
import ApplicationsTable from '@/view/entity/application/ApplicationsTable.vue';

const { data: applications } = getApplicationsQuery();
</script>
