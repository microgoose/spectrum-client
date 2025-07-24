<template>
    <FormGridView>
      <FieldView :label="$t('organization.fields.fullName')" :value="organization.fullName" fullWidth />
      <FieldView :label="$t('organization.fields.inn')" :value="organization.inn" />
      <FieldView :label="$t('organization.fields.ogrn')" :value="organization.ogrn" />
      <FieldView :label="$t('organization.fields.taxation')" :value="organization.taxation?.description" fullWidth />

      <Divider />

      <FieldView :label="$t('organization.fields.idType')" :value="organization.ipIdentity?.idType?.name" fullWidth />
      <FieldView :label="$t('organization.fields.idNumber')" :value="organization.ipIdentity?.idNumber" />
      <FieldView :label="$t('organization.fields.idIssueDate')" :value="organization.ipIdentity?.idIssueDate" />
      <FieldView :label="$t('organization.fields.idIssuer')" :value="organization.ipIdentity?.idIssuer" fullWidth />
      <FieldView :label="$t('organization.fields.idRegAddress')" :value="organization.ipIdentity?.idRegAddress" fullWidth />
      <FieldView :label="$t('organization.fields.idBirthdate')" :value="organization.ipIdentity?.idBirthdate" />

      <Divider />

      <FieldView :label="$t('organization.fields.postAddress')" :value="organization.postAddress" fullWidth />
      <FieldView :label="$t('organization.fields.factAddress')" :value="organization.factAddress" fullWidth />
      <FieldView :label="$t('organization.fields.phone')" :value="organization.phone" />
      <FieldView :label="$t('organization.fields.email')" :value="organization.email" />

      <Divider />

      <FieldView :label="$t('organization.fields.rekvPhone')" :value="organization.sendRekvContact?.phone" />
      <FieldView :label="$t('organization.fields.rekvEmail')" :value="organization.sendRekvContact?.email" />

      <Divider />

      <FieldGroupView v-for="(contact, i) in organization.organizationContacts" :key="i">
        <FieldView :label="$t('organization.fields.contact.fio')" :value="contact.fio" />
        <FieldView :label="$t('organization.fields.contact.title')" :value="contact.title" />
        <FieldView :label="$t('organization.fields.contact.phone')" :value="contact.phone" />
        <FieldView :label="$t('organization.fields.contact.email')" :value="contact.email" />
      </FieldGroupView>
    </FormGridView>
</template>

<script setup lang="ts">
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import FieldView from '@/shared/components/form/FieldView.vue';
import type { OrganizationType } from '@/api/organization/organization.types.ts';
import FieldGroupView from '@/shared/components/form/FieldGroupView.vue';
import FormGridView from '@/shared/components/form/FormGridView.vue';

defineProps<{ organization: OrganizationType }>();
</script>
