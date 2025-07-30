<style scoped lang="css">
.send-doc-widget {
  display: flex;
  flex-direction: column;
  width: 800px;
  align-items: center;
  gap: 1rem;
}
</style>

<template>
  <div class="send-doc-widget">
    <BlockTitle>
      {{ $t('sendDocumentPage.title') }}
    </BlockTitle>

    <Card class="w-full">
      <template #content>
        <SendDocumentForm />
      </template>
    </Card>
  </div>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import BlockTitle from '@/shared/components/BlockTitle.vue';
import SendDocumentForm from '@/view/feature/document/SendDocumentForm.vue';
</script>
