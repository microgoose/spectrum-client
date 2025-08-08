<template>
  <ClaimsTable v-if="claims" :claims="claims">
    <template #action="{ claim }">
      <Button
        icon="pi pi-minus-circle"
        text
        severity="danger"
        @click="removeClaim(claim.id)"
      />
    </template>
  </ClaimsTable>
  <Skeleton v-else width="100%" height="250px" />
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Skeleton from 'primevue/skeleton';
import ClaimsTable from '@/view/entity/claim/ClaimsTable.vue';
import { getClaimsQuery, removeClaim } from '@/service/claim/claim.service';

const { data: claims } = getClaimsQuery();
</script>
