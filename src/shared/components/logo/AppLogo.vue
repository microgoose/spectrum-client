<style module lang="css">
.mainLogo {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.mainLogo h2 {
  margin-top: 0.25rem;
  font: var(--font-h2-bold);
  color: var(--p-logo-text);
}
.mainLogo span {
  font: var(--font-subtitle);
  color: var(--p-text-muted-color);
  text-align: center;
}

.logoContainer {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.logoIcon {
  width: 38px;
  height: 38px;
  color: var(--p-logo-icon);
}
</style>

<template>
  <RouterLink :class="$style.mainLogo" :to="getRoutePath(Routes.HOME)">
    <div :class="$style.logoContainer">
      <logo :class="$style.logoIcon" />
      <h2>{{ $t('company.name') }}</h2>
    </div>
    <span>{{ $t('app.shortDescription') }}</span>
  </RouterLink>
</template>

<script setup lang="ts">
import { Routes } from '@/config/router.ts';
import { getRoutePath } from '@/service/app/route.service.ts';
import Logo from '@/shared/assets/logo.svg';
</script>
