<style scoped>
.logout-button {
  display: flex;
  margin-top: auto;
  justify-content: flex-end;
}
</style>

<template>
  <DefaultContentLayout center-content>
    <template #header>
      <ProfilePanel />
    </template>

    <template #content>
      <ProfileWidget />
    </template>

    <template #footer>
      <div class="logout-button">
        <Button :label="$t('profile.action.logout')" @click="confirmLogout" />
      </div>
    </template>
  </DefaultContentLayout>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import { confirmLogout } from '@/service/auth/logout.service.ts';
import ProfilePanel from '@/view/entity/user/ProfilePanel.vue';
import DefaultContentLayout from '@/view/layout/default/DefaultContentLayout.vue';
import ProfileWidget from '@/view/widget/user/ProfileWidget.vue';
</script>
