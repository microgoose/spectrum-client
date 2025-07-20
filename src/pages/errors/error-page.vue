<template>
  <Card>
    <template #title>
      {{ $t('ERROR_PAGE_TITLE') }}
    </template>
    <template #content>
      <p>{{ message || $t('ERROR_PAGE_DEFAULT_MESSAGE') }}</p>
      <Button :label="$t('BACK_TO_HOME')" @click="pushPage(Routes.HOME)" class="p-mt-3" />
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import Button from 'primevue/button';
import Card from 'primevue/card';

import { Routes, pushPage } from '@/config/router';

defineProps<{ message?: string }>();
</script>
