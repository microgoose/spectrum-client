<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  gap: 16px;
}
</style>

<template>
  <div :class="$style.container">
    <h2>{{ $t('profile.text.logoutConfirm') }}</h2>
    <Button :label="$t('profile.action.logout')" @click="logout" />
  </div>
</template>

<script setup lang="ts">
import Button from 'primevue/button';

import { logout } from '@/service/logout.service.ts';
</script>
