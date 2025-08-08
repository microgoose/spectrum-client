<template>
  <div>
    <TabMenu :model="tabs" v-model:activeIndex="activeIndex" />
    <DocumentTable :documents="docs" />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import TabMenu from 'primevue/tabmenu';
import { getClaims } from '@/api/claim.api';
import type { ClaimSummary } from '@/model/claim/claim.types';
import DocumentTable from '@/view/entity/document/DocumentTable.vue';

const docs = ref<ClaimSummary[]>([]);
const activeIndex = ref(0);
//TODO
const tabs = [{ label: 'Все' }, { label: 'Договоры' }, { label: 'Документы организации' }];

getClaims().then((claims) => (docs.value = claims));
</script>
