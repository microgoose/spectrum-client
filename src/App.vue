<script setup lang="ts">
import AppSidebar from '@/features/app-sidebar/ui/AppSidebar.vue';
import ProfilePanel from '@/features/profile/ui/ProfilePanel.vue';
import AppLayout from '@/shared/components/layout/AppLayout.vue';
import AppPageContentLayout from '@/shared/components/layout/AppPageContentLayout.vue';
</script>

<template>
  <AppLayout>
    <template #sidebar>
      <AppSidebar />
    </template>

    <template #content>
      <AppPageContentLayout>
        <template #header>
          <ProfilePanel />
        </template>

        <template #content>
          <router-view />
        </template>
      </AppPageContentLayout>
    </template>
  </AppLayout>
</template>
