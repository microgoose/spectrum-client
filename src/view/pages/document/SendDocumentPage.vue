<template>
  <DefaultContentLayout>
    <template #header>
      <ProfilePanel />
    </template>

    <template #content>
      <Card>
        <template #title>
          {{ $t('sendDocumentPageTitle') }}
        </template>
        <template #content>
          <p>Здесь будет отправка документов.</p>
        </template>
      </Card>
    </template>
  </DefaultContentLayout>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import ProfilePanel from '@/view/entity/user/ProfilePanel.vue';
import DefaultContentLayout from '@/view/layout/default/DefaultContentLayout.vue';
</script>
