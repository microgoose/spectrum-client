<template>
  <div class="flex flex-wrap gap-3">
    <!-- Основные поля -->
    <div class="flex flex-column gap-1 w-full">
      <span class="text-400 subtext">{{ $t('organization.fields.fullName') }}</span>
      <span class="text">{{ organization.fullName || '-' }}</span>
    </div>
    <div class="flex flex-column gap-1 w-5">
      <span class="text-400 subtext">{{ $t('organization.fields.inn') }}</span>
      <span class="text">{{ organization.inn || '-' }}</span>
    </div>
    <div class="flex flex-column gap-1 w-5">
      <span class="text-400 subtext">{{ $t('organization.fields.ogrn') }}</span>
      <span class="text">{{ organization.ogrn || '-' }}</span>
    </div>
    <div class="flex flex-column gap-1 w-full">
      <span class="text-400 subtext">{{ $t('organization.fields.taxation') }}</span>
      <span class="text">{{ organization.taxation?.description || '-' }}</span>
    </div>

    <Divider />

    <!-- Документы -->
    <div class="flex flex-column gap-1 w-full">
      <span class="text-400 subtext">{{ $t('organization.fields.idType') }}</span>
      <span class="text">{{ organization.ipIdentity?.idType?.name || '-' }}</span>
    </div>
    <div class="flex flex-column gap-1 w-5">
      <span class="text-400 subtext">{{ $t('organization.fields.idNumber') }}</span>
      <span class="text">{{ organization.ipIdentity?.idNumber || '-' }}</span>
    </div>
    <div class="flex flex-column gap-1 w-5">
      <span class="text-400 subtext">{{ $t('organization.fields.idIssueDate') }}</span>
      <span class="text">{{ organization.ipIdentity?.idIssueDate || '-' }}</span>
    </div>
    <div class="flex flex-column gap-1 w-full">
      <span class="text-400 subtext">{{ $t('organization.fields.idIssuer') }}</span>
      <span class="text">{{ organization.ipIdentity?.idIssuer || '-' }}</span>
    </div>
    <div class="flex flex-column gap-1 w-full">
      <span class="text-400 subtext">{{ $t('organization.fields.idRegAddress') }}</span>
      <span class="text">{{ organization.ipIdentity?.idRegAddress || '-' }}</span>
    </div>
    <div class="flex flex-column gap-1 w-full">
      <span class="text-400 subtext">{{ $t('organization.fields.idBirthdate') }}</span>
      <span class="text">{{ organization.ipIdentity?.idBirthdate || '-' }}</span>
    </div>

    <Divider />

    <!-- Адреса -->
    <div class="flex flex-column gap-1 w-full">
      <span class="text-400 subtext">{{ $t('organization.fields.postAddress') }}</span>
      <span class="text">{{ organization.postAddress || '-' }}</span>
    </div>
    <div class="flex flex-column gap-1 w-full">
      <span class="text-400 subtext">{{ $t('organization.fields.factAddress') }}</span>
      <span class="text">{{ organization.factAddress || '-' }}</span>
    </div>

    <!-- Контакты -->
    <div class="flex flex-column gap-1 w-5">
      <span class="text-400 subtext">{{ $t('organization.fields.phone') }}</span>
      <span class="text">{{ organization.phone || '-' }}</span>
    </div>
    <div class="flex flex-column gap-1 w-5">
      <span class="text-400 subtext">{{ $t('organization.fields.email') }}</span>
      <span class="text">{{ organization.email || '-' }}</span>
    </div>

    <Divider />

    <!-- Контакты по реквизитам -->
    <div class="flex flex-column gap-1 w-5">
      <span class="text-400 subtext">{{ $t('organization.fields.rekvPhone') }}</span>
      <span class="text">{{ organization.sendRekvContact?.phone || '-' }}</span>
    </div>
    <div class="flex flex-column gap-1 w-5">
      <span class="text-400 subtext">{{ $t('organization.fields.rekvEmail') }}</span>
      <span class="text">{{ organization.sendRekvContact?.email || '-' }}</span>
    </div>

    <Divider />

    <!-- Список контактов -->
    <template v-for="(contact, i) in organization.organizationContacts" :key="i">
      <div class="flex flex-column gap-1 w-5">
        <span class="text-400 subtext">{{ $t('organization.fields.contact.fio') }}</span>
        <span class="text">{{ contact.fio || '-' }}</span>
      </div>
      <div class="flex flex-column gap-1 w-5">
        <span class="text-400 subtext">{{ $t('organization.fields.contact.title') }}</span>
        <span class="text">{{ contact.title || '-' }}</span>
      </div>
      <div class="flex flex-column gap-1 w-5">
        <span class="text-400 subtext">{{ $t('organization.fields.contact.phone') }}</span>
        <span class="text">{{ contact.phone || '-' }}</span>
      </div>
      <div class="flex flex-column gap-1 w-5">
        <span class="text-400 subtext">{{ $t('organization.fields.contact.email') }}</span>
        <span class="text">{{ contact.email || '-' }}</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import Divider from 'primevue/divider';
import type { OrganizationType } from '@/api/organization/organization.types.ts';

defineProps<{ organization: OrganizationType }>();
</script>
