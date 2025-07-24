<template>
  <PageTitle>
    {{ $t('applicationsPageTitle') }}
  </PageTitle>
  <ApplicationsWidget />
</template>

<script setup lang="ts">
import PageTitle from '@/shared/components/PageTitle.vue';
import ApplicationsWidget from '@/view/widget/application/ApplicationsWidget.vue';
</script>
