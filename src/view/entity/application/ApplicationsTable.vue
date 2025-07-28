<template>
  <DataTable :value="applications">
    <Column field="type" :header="$t('applicationsTable.columns.type')">
      <template #body="{ data }">
        <span>{{ data.type }}</span>
      </template>
    </Column>

    <Column field="status" :header="$t('applicationsTable.columns.status')" />

    <Column field="comment" :header="$t('applicationsTable.columns.comment')">
      <template #body="{ data }">
        {{ data.comment || '-' }}
      </template>
    </Column>

    <Column field="date" :header="$t('applicationsTable.columns.date')" />

    <Column field="sender" :header="$t('applicationsTable.columns.sender')" />

    <Column :header="$t('applicationsTable.columns.actions')">
      <template #body="{ data }">
        <Button icon="pi pi-minus-circle" text severity="danger" @click="remove(data)" />
      </template>
    </Column>
  </DataTable>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
import type { ApplicationType } from '@/api/application/application.types.ts';

defineProps<{
  applications: ApplicationType[];
}>();

const emit = defineEmits<{
  (e: 'remove', item: ApplicationType): void;
}>();

const remove = (item: ApplicationType) => {
  emit('remove', item);
};
</script>
