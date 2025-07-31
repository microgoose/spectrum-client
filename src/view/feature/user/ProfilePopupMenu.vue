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
  gap: 0.5rem;
}

.menu {
  padding: 0.5rem;
  min-width: 300px;
}

.profileMenuInfo {
  padding: 0.25rem;
  display: flex;
  flex-direction: column;

  .shortInfoItem {
    padding: 0.5rem 0.75rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: var(--p-text-muted-color);
  }
}
</style>

<template>
  <div :class="$style.profileButton">
    <Button>
      <RouterLink :to="getRoutePath(Routes.PROFILE)" :class="$style.profileButtonLink">
        <UserAvatar :avatar="null" />
        <!-- TODO: add avatar -->
        <span>{{ profile.name }} {{ profile.surname }} {{ profile.patronymic }}</span>
      </RouterLink>
    </Button>

    <Button icon="pi pi-angle-down" @click="toggle" aria-haspopup="true" :aria-controls="menuId" />
  </div>

  <Menu :id="menuId" :class="$style.menu" ref="menu" :model="menuItems" :popup="true">
    <template #start>
      <div :class="$style.profileMenuInfo">
        <div :class="$style.shortInfoItem">
          <i class="pi pi-envelope" />
          <span>{{ profile.email }}</span>
        </div>
        <div :class="$style.shortInfoItem">
          <i class="pi pi-phone" />
          <span>{{ profile.phone }}</span>
        </div>
      </div>
    </template>
  </Menu>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from 'primevue/button';
import Menu from 'primevue/menu';
import { Routes } from '@/config/router.ts';
import type { UserType } from '@/model/user/user.types.ts';
import { getRoutePath } from '@/service/app/route.service.ts';
import { useProfilePopupStore } from '@/store/profile/profile-popup.store.ts';
import UserAvatar from '@/view/entity/user/UserAvatar.vue';

defineProps<{ profile: UserType }>();

const menuItems = useProfilePopupStore().menuItems;
const menuId = ref('overlay_menu');
const menu = ref();

const toggle = (event: Event) => {
  menu.value?.toggle(event);
};
</script>
