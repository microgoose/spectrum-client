<style module lang="css">
.userPanel {
  padding-left: 1rem;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
}

.organizationInfo {
  display: flex;
  align-items: center;
  gap: 1rem;
}
</style>

<template>
  <div :class="$style.userPanel">
    <div :class="$style.organizationInfo">
      <template v-if="organization">
        <span>{{ organization.shortName }}</span>
        <span>ИНН: {{ organization.inn }}</span>
        <span>ОГРН: {{ organization.ogrn }}</span>
      </template>

      <template v-else>
        <Skeleton width="100px" height="20px" />
        <Skeleton width="100px" height="20px" />
        <Skeleton width="100px" height="20px" />
      </template>
    </div>

    <ProfilePopupMenu v-if="user" :profile="user" />
    <Skeleton v-else width="120px" height="100%" />
  </div>
</template>

<script setup lang="ts">
import Skeleton from 'primevue/skeleton';
import { getAuthOrganizationQuery } from '@/service/organization/organization.service.ts';
import { getAuthUserQuery } from '@/service/user/user.service.ts';
import ProfilePopupMenu from '../../feature/user/ProfilePopupMenu.vue';

const { data: user } = getAuthUserQuery();
const { data: organization } = getAuthOrganizationQuery();
</script>
