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
  <DefaultContentLayout center-content>
    <template #content>
      <div class="send-doc-widget">
        <BlockTitle>
          {{ $t('sendDocumentPageTitle') }}
        </BlockTitle>

        <Card class="w-full">
          <template #content>
            <SendDocumentForm />
          </template>
        </Card>
      </div>
    </template>

    <template #footer>
      <Button label="Отправить" @click="handleSubmit" />
    </template>
  </DefaultContentLayout>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Card from 'primevue/card';
import { dialogs } from '@/config/dialog.ts';
import BlockTitle from '@/shared/components/BlockTitle.vue';
import { useDialogStore } from '@/store/app/dialog.store.ts';
import SendDocumentForm from '@/view/feature/document/SendDocumentForm.vue';
import DefaultContentLayout from '@/view/layout/default/DefaultContentLayout.vue';

const dialog = useDialogStore();

function handleSubmit() {
  dialog.open(dialogs.SEND_DOCUMENT_SUCCESS);
}
</script>
