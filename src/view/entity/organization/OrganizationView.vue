<style scoped lang="scss">
.form-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.field {
  display: flex;
  flex-direction: column;
  flex: 1 1 300px;
}

.full-width {
  flex: 1 1 100%;
}

.field-group {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 1rem;
}

.organization-view label {
  font: var(--font-text-bold);
  margin-bottom: 4px;
}
</style>

<template>
  <Card>
    <template #content>
      <div class="organization-view form-grid">
        <div class="field full-width">
          <label>{{ $t('organization.fields.fullName') }}</label>
          <span>{{ organization.fullName }}</span>
        </div>

        <div class="field">
          <label>{{ $t('organization.fields.inn') }}</label>
          <span>{{ organization.inn }}</span>
        </div>

        <div class="field">
          <label>{{ $t('organization.fields.ogrn') }}</label>
          <span>{{ organization.ogrn }}</span>
        </div>

        <div class="field full-width">
          <label>{{ $t('organization.fields.taxation') }}</label>
          <span>{{ organization.taxation?.description }}</span>
        </div>

        <Divider />

        <div class="field full-width">
          <label>{{ $t('organization.fields.idType') }}</label>
          <span>{{ organization.ipIdentity?.idType?.name }}</span>
        </div>

        <div class="field">
          <label>{{ $t('organization.fields.idNumber') }}</label>
          <span>{{ organization.ipIdentity?.idNumber }}</span>
        </div>

        <div class="field">
          <label>{{ $t('organization.fields.idIssueDate') }}</label>
          <span>{{ organization.ipIdentity?.idIssueDate }}</span>
        </div>

        <div class="field full-width">
          <label>{{ $t('organization.fields.idIssuer') }}</label>
          <span>{{ organization.ipIdentity?.idIssuer }}</span>
        </div>

        <div class="field full-width">
          <label>{{ $t('organization.fields.idRegAddress') }}</label>
          <span>{{ organization.ipIdentity?.idRegAddress }}</span>
        </div>

        <div class="field">
          <label>{{ $t('organization.fields.idBirthdate') }}</label>
          <span>{{ organization.ipIdentity?.idBirthdate }}</span>
        </div>

        <Divider />

        <div class="field full-width">
          <label>{{ $t('organization.fields.postAddress') }}</label>
          <span>{{ organization.postAddress }}</span>
        </div>

        <div class="field full-width">
          <label>{{ $t('organization.fields.factAddress') }}</label>
          <span>{{ organization.factAddress }}</span>
        </div>

        <div class="field">
          <label>{{ $t('organization.fields.phone') }}</label>
          <span>{{ organization.phone }}</span>
        </div>

        <div class="field">
          <label>{{ $t('organization.fields.email') }}</label>
          <span>{{ organization.email }}</span>
        </div>

        <Divider />

        <div class="field">
          <label>{{ $t('organization.fields.rekvPhone') }}</label>
          <span>{{ organization.sendRekvContact?.phone }}</span>
        </div>

        <div class="field">
          <label>{{ $t('organization.fields.rekvEmail') }}</label>
          <span>{{ organization.sendRekvContact?.email }}</span>
        </div>

        <Divider />

        <div
          v-for="(contact, index) in organization.organizationContacts"
          :key="index"
          class="field-group"
        >
          <div class="field">
            <label>{{ $t('organization.fields.contact.fio') }}</label>
            <span>{{ contact.fio }}</span>
          </div>
          <div class="field">
            <label>{{ $t('organization.fields.contact.title') }}</label>
            <span>{{ contact.title }}</span>
          </div>
          <div class="field">
            <label>{{ $t('organization.fields.contact.phone') }}</label>
            <span>{{ contact.phone }}</span>
          </div>
          <div class="field">
            <label>{{ $t('organization.fields.contact.email') }}</label>
            <span>{{ contact.email }}</span>
          </div>
        </div>
      </div>
    </template>
  </Card>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import type { OrganizationType } from '@/api/organization/organization.types.ts';

defineProps<{ organization: OrganizationType }>();
</script>
