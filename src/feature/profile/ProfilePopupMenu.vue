<style module lang="scss">
.profileButton {
  --p-button-border-radius: none;

  min-width: 120px;
  height: 100%;
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
  padding: 14px 8px 14px 8px;
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
        <ProfileAvatar :avatar="null" />
        <!-- TODO: add avatar -->
        <span>{{ profile.name }} {{ profile.surname }} {{ profile.patronymic }}</span>
      </RouterLink>
    </Button>

    <Button icon="pi pi-angle-down" @click="toggle" aria-haspopup="true" :aria-controls="menuId" />
  </div>

  <Menu :id="menuId" :class="$style.menu" ref="menu" :model="menuItems" :popup="true">
    <template #start>
      <div :class="$style.profileMenuInfo">
        <span>
          <i class="pi pi-envelope" />
          {{ profile.email }}
        </span>
        <span>
          <i class="pi pi-phone" />
          {{ profile.phone }}
        </span>
      </div>
    </template>
  </Menu>

  <Dialog
    :header="$t('profile.text.logoutTitle')"
    modal
    :visible="dialogStore.isOpen(Dialogs.LOGOUT)"
    @update:visible="dialogStore.close(Dialogs.LOGOUT)"
  >
    <ConfigLogout />
  </Dialog>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import Button from 'primevue/button';
import Dialog from 'primevue/dialog';
import Menu from 'primevue/menu';

import { Dialogs } from '@/config/dialog';
import { Routes } from '@/config/router';
import ConfigLogout from '@/feature/auth/ConfigLogout.vue';
import ProfileAvatar from '@/feature/profile/ProfileAvatar.vue';
import type { User } from '@/feature/user/model/user.types';
import { getRoutePath } from '@/service/route.service';
import { useDialogStore } from '@/store/dialog.store';
import { useProfilePopupStore } from '@/store/profile-popup.store';

defineProps<{
  profile: User;
}>();

const menuItems = useProfilePopupStore().menuItems;
const dialogStore = useDialogStore();

const menuId = ref('overlay_menu');
const menu = ref();

const toggle = (event: Event) => {
  menu.value?.toggle(event);
};
</script>
