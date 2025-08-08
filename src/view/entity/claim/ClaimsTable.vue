<template>
  <DataTable :value="claims">
    <Column field="claimType" :header="$t('applicationsTable.columns.type')">
      <template #body="{ data }">
        <span>{{ data.claimType.description }}</span>
      </template>
    </Column>

    <Column field="status" :header="$t('applicationsTable.columns.status')" />

    <Column field="comment" :header="$t('applicationsTable.columns.comment')">
      <template #body="{ data }">
        {{ data.comment || '-' }}
      </template>
    </Column>

    <Column field="date" :header="$t('applicationsTable.columns.date')">
      <template #body="{ data }">
        {{ data.date ? formatDateTime(data.date) : '-' }}
      </template>
    </Column>

    <Column field="sender" :header="$t('applicationsTable.columns.sender')">
      <template #body="{ data }">
        <span>{{ data.user.fio }}</span>
      </template>
    </Column>

    <Column :header="$t('applicationsTable.columns.actions')">
      <template #body="{ data }">
        <slot name="action" :claim="data" />
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import type { ClaimSummary } from '@/model/claim/claim.types';
import { formatDateTime } from '@/shared/lib/date-util';

defineProps<{
  claims: ClaimSummary[];
}>();
</script>
