<template>
  <Card>
    <template #title>
      {{ $t('notFoundPageTitle') }}
    </template>

    <template #content>
      <p>{{ $t('notFoundPageDescription') }}</p>
      <Button @click="pushPage(Routes.HOME)" :label="$t('backToHome')" class="p-mt-3" />
    </template>
  </Card>
</template>

<script setup lang="ts">
import Button from 'primevue/button';
import Card from 'primevue/card';

import { Routes } from '@/config/router';
import { pushPage } from '@/service/route.service';
</script>
