<template>
  <DefaultContentLayout>
    <template #header>
      <ProfilePanel />
    </template>

    <template #content>
      <BlockTitle>
        {{ $t('applicationsPage.title') }}
      </BlockTitle>
      <ClaimsWidget />
    </template>
  </DefaultContentLayout>
</template>

<script setup lang="ts">
import BlockTitle from '@/shared/components/BlockTitle.vue';
import ProfilePanel from '@/view/entity/user/ProfilePanel.vue';
import DefaultContentLayout from '@/view/layout/default/DefaultContentLayout.vue';
import ClaimsWidget from '@/view/widget/claim/ClaimsWidget.vue';
</script>
