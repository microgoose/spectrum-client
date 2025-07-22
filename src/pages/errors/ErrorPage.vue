<template>
  <Card>
    <template #title>
      {{ $t('errorPageTitle') }}
    </template>
    <template #content>
      <p>{{ message || $t('errorPageDefaultMessage') }}</p>
      <Button :label="$t('backToHome')" @click="pushPage(Routes.HOME)" class="p-mt-3" />
    </template>
  </Card>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

import Button from 'primevue/button';
import Card from 'primevue/card';

import { Routes } from '@/config/router';
import { pushPage } from '@/service/route.service';

defineProps<{ message?: string }>();
</script>
