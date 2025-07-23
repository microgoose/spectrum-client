<template>
  <Card>
    <template #title>
      {{ $t('notFoundPageTitle') }}
    </template>

    <template #content>
      <p>{{ $t('notFoundPageDescription') }}</p>
    </template>

    <template #footer>
      <Button @click="pushPage(Routes.HOME)" :label="$t('backToHome')" class="p-mt-3" />
    </template>
  </Card>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Card from 'primevue/card';
import { Routes } from '@/config/router.ts';
import { pushPage } from '@/service/route.service.ts';
</script>
