<template>
  <DefaultContentLayout centerContent noContentPadding>
    <template #header>
      <ProfilePanel />
    </template>

    <template #content>
      <SendDocumentWidget />
    </template>
  </DefaultContentLayout>
</template>

<script setup lang="ts">
import ProfilePanel from '@/view/entity/user/ProfilePanel.vue';
import DefaultContentLayout from '@/view/layout/default/DefaultContentLayout.vue';
import SendDocumentWidget from '@/view/widget/document/SendDocumentWidget.vue';
</script>
