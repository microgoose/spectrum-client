<template>
  <DefaultContentLayout center-content>
    <template #header>
      <ProfilePanel />
    </template>

    <template #content>
      <OrganizationWidget />
    </template>
  </DefaultContentLayout>
</template>

<script setup lang="ts">
import ProfilePanel from '@/view/entity/user/ProfilePanel.vue';
import DefaultContentLayout from '@/view/layout/default/DefaultContentLayout.vue';
import OrganizationWidget from '@/view/widget/organization/OrganizationWidget.vue';
</script>
