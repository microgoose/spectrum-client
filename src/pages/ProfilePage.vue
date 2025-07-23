<template>
  <Card>
    <template #title>
      {{ $t('profilePageTitle') }}
    </template>

    <template #content>
      <div>
        <!-- TODO: add profile form -->
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import { useProfileStore } from '@/store/profile.store';

const profileStore = useProfileStore();
</script>
