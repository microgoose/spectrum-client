<template>
  <PageTitle>
    {{ $t('documentsPageTitle') }}
  </PageTitle>
  <ProfileDocuments />
</template>

<script setup lang="ts">
import PageTitle from '@/shared/components/PageTitle.vue';
import ProfileDocuments from '@/view/widget/document/ProfileDocuments.vue';
</script>
