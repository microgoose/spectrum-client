<style module lang="scss">
.userPanel {
  padding-left: 16px;
  height: 40px;
  display: flex;
  justify-content: space-between;
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
      <span>{{ profileStore.organization.name }}</span>
      <span>ИНН: {{ profileStore.organization.inn }}</span>
      <span>ОГРН: {{ profileStore.organization.ogrn }}</span>
    </div>

    <ProfilePopupMenu />
  </div>
</template>

<script setup lang="ts">
import { useProfileStore } from '@/core/profile-store';

import ProfilePopupMenu from './ProfilePopupMenu.vue';

const profileStore = useProfileStore();
</script>
