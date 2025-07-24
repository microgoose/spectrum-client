<template>
  <div>
    <TabMenu :model="tabs" v-model:activeIndex="activeIndex" />
    <DocumentTable :documents="docs" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TabMenu from 'primevue/tabmenu';
import DocumentTable from '@/view/entity/document/DocumentTable.vue';

//TODO
const docs = [
  {
    type: 'Анкета участника',
    status: 'Утвержден',
    date: '15.03.2025',
    endDate: null,
  },
];

const activeIndex = ref(0);

const tabs = [{ label: 'Все' }, { label: 'Договоры' }, { label: 'Документы организации' }];
</script>
