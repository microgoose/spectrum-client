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
  padding: 8px 12px 0 12px;
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
import type { UserType } from '@/api/user/user.types.ts';
import { Dialogs } from '@/config/dialog.ts';
import { Routes } from '@/config/router.ts';
import { getRoutePath } from '@/service/app/route.service.ts';
import { useDialogStore } from '@/store/app/dialog.store.ts';
import { useProfilePopupStore } from '@/store/profile/profile-popup.store.ts';
import ProfileAvatar from '@/view/entity/user/ProfileAvatar.vue';
import ConfigLogout from '@/view/feature/auth/ConfigLogout.vue';

defineProps<{
  profile: UserType;
}>();

const menuItems = useProfilePopupStore().menuItems;
const dialogStore = useDialogStore();

const menuId = ref('overlay_menu');
const menu = ref();

const toggle = (event: Event) => {
  menu.value?.toggle(event);
};
</script>
