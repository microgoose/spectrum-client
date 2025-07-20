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
import { Routes, pushPage } from '@/config/router';
import { defineProps } from 'vue';
import Card from 'primevue/card';
import Button from 'primevue/button';

defineProps<{ message?: string }>();
</script>
