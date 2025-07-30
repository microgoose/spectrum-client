<template>
  <div class="flex flex-column gap-3">
    <!-- Основная информация -->
    <div class="flex justify-between w-full">
      <div class="flex flex-column gap-1 w-6">
        <span class="text-400 subtext">{{ $t('userView.fields.login') }}</span>
        <span class="text">{{ user.login || '-' }}</span>
      </div>
      <div class="flex flex-column gap-1 w-6">
        <span class="text-400 subtext">{{ $t('userView.fields.name') }}</span>
        <span class="text">{{ user.name || '-' }}</span>
      </div>
    </div>

    <div class="flex justify-between w-full">
      <div class="flex flex-column gap-1 w-6">
        <span class="text-400 subtext">{{ $t('userView.fields.surname') }}</span>
        <span class="text">{{ user.surname || '-' }}</span>
      </div>
      <div class="flex flex-column gap-1 w-6">
        <span class="text-400 subtext">{{ $t('userView.fields.patronymic') }}</span>
        <span class="text">{{ user.patronymic || '-' }}</span>
      </div>
    </div>

    <Divider />

    <!-- Контактная информация -->
    <div class="flex justify-between w-full">
      <div class="flex flex-column gap-1 w-6">
        <span class="text-400 subtext">{{ $t('userView.fields.email') }}</span>
        <span class="text">{{ user.email || '-' }}</span>
      </div>
      <div class="flex flex-column gap-1 w-6">
        <span class="text-400 subtext">{{ $t('userView.fields.phone') }}</span>
        <span class="text">{{ user.phone || '-' }}</span>
      </div>
    </div>

    <div class="flex flex-column gap-1 w-6">
      <span class="text-400 subtext">{{ $t('userView.fields.inn') }}</span>
      <span class="text">{{ user.inn || '-' }}</span>
    </div>
  </div>
</template>

<script setup lang="ts">
import Divider from 'primevue/divider';
import type { UserType } from '@/api/user/user.types.ts';

defineProps<{ user: UserType }>();
</script>
