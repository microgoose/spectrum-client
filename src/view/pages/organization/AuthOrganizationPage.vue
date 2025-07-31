<template>
  <DefaultContentLayout center-content>
    <template #header>
      <ProfilePanel />
    </template>

    <template #content>
      <AuthOrganizationWidget />
    </template>
  </DefaultContentLayout>
</template>

<script setup lang="ts">
import ProfilePanel from '@/view/entity/user/ProfilePanel.vue';
import DefaultContentLayout from '@/view/layout/default/DefaultContentLayout.vue';
import AuthOrganizationWidget from '@/view/widget/organization/AuthOrganizationWidget.vue';
</script>
