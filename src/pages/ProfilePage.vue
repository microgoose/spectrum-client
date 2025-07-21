<template>
  <Card>
    <template #title>
      {{ $t('profilePageTitle') }}
    </template>

    <template #content>
      <div>
        <InputText type="text" v-model="profileStore.profile.fullName" />
        <InputText type="text" v-model="profileStore.profile.email" />
        <InputText type="text" v-model="profileStore.profile.phone" />
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import InputText from 'primevue/inputtext';

import { useProfileStore } from '@/core/profile-store';

const profileStore = useProfileStore();
</script>
