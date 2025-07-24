<template>
  <DefaultContentLayout>
    <template #header>
      <ProfilePanel />
    </template>

    <template #content>
      <BlockTitle>
        {{ $t('applicationsPageTitle') }}
      </BlockTitle>
      <ApplicationsWidget />
    </template>
  </DefaultContentLayout>
</template>

<script setup lang="ts">
import BlockTitle from '@/shared/components/BlockTitle.vue';
import ProfilePanel from '@/view/entity/user/ProfilePanel.vue';
import DefaultContentLayout from '@/view/layout/default/DefaultContentLayout.vue';
import ApplicationsWidget from '@/view/widget/application/ApplicationsWidget.vue';
</script>
