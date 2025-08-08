<template>
  <DataTable :value="documents">
    <Column field="claimType" :header="$t('documentTable.columns.type')">
      <template #body="{ data }">
        <span>{{ data.claimType.description }}</span>
      </template>
    </Column>
    <Column field="status" :header="$t('documentTable.columns.status')" />
    <Column field="date" :header="$t('documentTable.columns.date')">
      <template #body="{ data }">
        {{ data.date ? formatDateTime(data.date) : '-' }}
      </template>
    </Column>
    <Column field="endDate" :header="$t('documentTable.columns.endDate')">
      <template #body="{ data }">
        {{ data.endDate ? formatDateTime(data.endDate) : '-' }}
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import type { ClaimSummary } from '@/model/claim/claim.types';
import { formatDateTime } from '@/shared/lib/date-util';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';

defineProps<{
  //TOOD temporary design
  documents: ClaimSummary[];
}>();
</script>
