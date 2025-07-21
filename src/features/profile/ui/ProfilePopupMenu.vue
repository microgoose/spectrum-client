<style module lang="scss">
.profileButton {
  --p-button-border-radius: none;

  min-width: 120px;
  display: flex;
}

.profileButtonLink {
  display: flex;
  align-items: center;
  gap: 4px;
}

.menu {
  padding: 8px;
  min-width: 300px;
}

.profileMenuInfo {
  padding: 0 12px;
  display: flex;
  flex-direction: column;
  gap: 8px;

  & > span {
    display: flex;
    align-items: center;
    gap: 8px;
    color: var(--p-text-muted-color);
  }
}
</style>

<template>
  <div :class="$style.profileButton">
    <Button>
      <RouterLink :to="getRoutePath(Routes.PROFILE)" :class="$style.profileButtonLink">
        <ProfileAvatar :avatar="profileStore.profile.avatar" />
        <span>{{ profileStore.profile.fullName }}</span>
      </RouterLink>
    </Button>

    <Button icon="pi pi-angle-down" @click="toggle" aria-haspopup="true" :aria-controls="menuId" />
  </div>

  <Menu :id="menuId" :class="$style.menu" ref="menu" :model="menuItems" :popup="true">
    <template #start>
      <div :class="$style.profileMenuInfo">
        <span>
          <i class="pi pi-envelope" />
          {{ profileStore.profile.email }}
        </span>
        <span>
          <i class="pi pi-phone" />
          {{ profileStore.profile.phone }}
        </span>
      </div>
    </template>
  </Menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import Button from 'primevue/button';
import Menu from 'primevue/menu';

import { Routes, getRoutePath } from '@/config/router';
import { useProfileStore } from '@/core/profile-store';
import ProfileAvatar from '@/features/profile/ui/ProfileAvatar.vue';

const profileStore = useProfileStore();

const menuId = ref('overlay_menu');
const menu = ref();

const menuItems = ref([
  {
    label: 'Выйти',
    icon: 'pi pi-sign-out', //todo
  },
]);

const toggle = (event: Event) => {
  menu.value?.toggle(event);
};
</script>
