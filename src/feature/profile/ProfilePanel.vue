<style module lang="scss">
.userPanel {
  padding-left: 16px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
}

.organizationInfo {
  display: flex;
  align-items: center;
  gap: 16px;
}
</style>

<template>
  <div :class="$style.userPanel">
    <div :class="$style.organizationInfo">
      <template v-if="profileStore.organization">
        <span>{{ profileStore.organization.shortName }}</span>
        <span>ИНН: {{ profileStore.organization.inn }}</span>
        <span>ОГРН: {{ profileStore.organization.ogrn }}</span>
      </template>

      <template v-else>
        <Skeleton width="100px" height="20px" />
        <Skeleton width="100px" height="20px" />
        <Skeleton width="100px" height="20px" />
      </template>
    </div>

    <ProfilePopupMenu v-if="profileStore.profile" :profile="profileStore.profile" />
    <Skeleton v-else width="120px" height="100%" />
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'primevue/skeleton';

import { loadProfile } from '@/service/profile.service';
import { useProfileStore } from '@/store/profile.store';

import ProfilePopupMenu from './ProfilePopupMenu.vue';

const profileStore = useProfileStore();

if (!profileStore.isLoading) loadProfile();
</script>
