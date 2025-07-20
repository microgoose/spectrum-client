<template>
  <Card>
    <template #title>
      {{ $t('NOT_FOUND_PAGE_TITLE') }}
    </template>

    <template #content>
      <p>{{ $t('NOT_FOUND_PAGE_DESCRIPTION') }}</p>
      <Button @click="pushPage(Routes.HOME)" :label="$t('BACK_TO_HOME')" class="p-mt-3" />
    </template>
  </Card>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Card from 'primevue/card';

import { Routes, pushPage } from '@/config/router';
</script>
