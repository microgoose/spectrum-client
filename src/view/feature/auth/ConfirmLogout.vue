<style lang="scss" module>
.container {
  display: flex;
  flex-direction: column;
  width: 300px;
  gap: 2rem;
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
import { logout } from '@/service/auth/logout.service.ts';
</script>
