<template>
  <DataTable :value="documents">
    <Column field="type" :header="$t('documentTable.columns.type')">
      <template #body="{ data }">
        <span>{{ data.type }}</span>
      </template>
    </Column>
    <Column field="status" :header="$t('documentTable.columns.status')" />
    <Column field="date" :header="$t('documentTable.columns.date')" />
    <Column field="endDate" :header="$t('documentTable.columns.endDate')">
      <template #body="{ data }">
        {{ data.endDate || '-' }}
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';

interface DocumentData {
  type: string;
  status: string;
  date: string;
  endDate?: string | null;
}

defineProps<{
  documents: DocumentData[];
}>();
</script>
