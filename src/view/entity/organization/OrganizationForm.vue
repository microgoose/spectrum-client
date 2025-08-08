<template>
  <form class="flex flex-column gap-5" @submit.prevent="onSubmit">
    <!-- Основное -->
    <fieldset class="grid grid-cols-2 gap-3">
      <legend class="h2-bold pb-3">{{ $t('organizationForm.fieldset.main') }}</legend>

      <InputField
        name="fullName"
        :label="$t('organizationForm.fields.fullName')"
        class="col-span-2"
      />

      <InputField name="inn" :label="$t('organizationForm.fields.inn')" class="col-span-1" />
      <InputField name="ogrn" :label="$t('organizationForm.fields.ogrn')" class="col-span-1" />

      <RadioField
        name="taxation.id"
        :options="taxationOptions"
        :label="$t('organizationForm.fields.taxation')"
        class="col-span-2"
      />
    </fieldset>

    <Divider />

    <!-- Документ -->
    <fieldset class="grid grid-cols-2 gap-3">
      <legend class="h2-bold pb-3">{{ $t('organizationForm.fieldset.document') }}</legend>

      <InputField
        name="ipIdentity.idType.name"
        :label="$t('organizationForm.fields.idType')"
        class="col-span-2"
      />

      <InputField
        name="ipIdentity.idNumber"
        :label="$t('organizationForm.fields.idNumber')"
        class="col-span-1"
      />

      <DateField
        name="ipIdentity.idIssueDate"
        :label="$t('organizationForm.fields.idIssueDate')"
        class="col-span-1"
      />

      <InputField
        name="ipIdentity.idIssuer"
        :label="$t('organizationForm.fields.idIssuer')"
        class="col-span-2"
      />

      <InputField
        name="ipIdentity.idRegAddress"
        :label="$t('organizationForm.fields.idRegAddress')"
        class="col-span-2"
      />

      <DateField name="ipIdentity.idBirthdate" :label="$t('organizationForm.fields.idBirthdate')" />
    </fieldset>

    <Divider />

    <!-- Адреса -->
    <fieldset class="grid grid-cols-2 gap-3">
      <legend class="h2-bold pb-3">{{ $t('organizationForm.fieldset.address') }}</legend>

      <InputField
        name="postAddress"
        :label="$t('organizationForm.fields.postAddress')"
        class="col-span-2"
      />

      <InputField
        name="factAddress"
        :label="$t('organizationForm.fields.factAddress')"
        class="col-span-2"
      />
    </fieldset>

    <!-- Контакты -->
    <fieldset class="grid grid-cols-2 gap-3">
      <legend class="h2-bold pb-3">{{ $t('organizationForm.fieldset.mainContact') }}</legend>

      <InputField name="phone" :label="$t('organizationForm.fields.phone')" class="col-span-1" />

      <InputField name="email" :label="$t('organizationForm.fields.email')" class="col-span-1" />
    </fieldset>

    <!-- Контакты по реквизитам -->
    <fieldset class="grid grid-cols-2 gap-3">
      <legend class="h2-bold pb-3">{{ $t('organizationForm.fieldset.rekvContacts') }}</legend>

      <InputField
        name="sendRekvContact.phone"
        :label="$t('organizationForm.fields.rekvPhone')"
        class="col-span-1"
      />

      <InputField
        name="sendRekvContact.email"
        :label="$t('organizationForm.fields.rekvEmail')"
        class="col-span-1"
      />
    </fieldset>

    <Divider />

    <!-- Прочие контакты -->
    <fieldset class="flex flex-column gap-4">
      <legend class="h2-bold pb-3">{{ $t('organizationForm.fieldset.contacts') }}</legend>

      <div
        class="grid grid-cols-2 gap-3"
        v-for="(field, index) in contactFields"
        :key="`org-con-${index}`"
      >
        <Button
          class="w-5"
          icon="pi pi-minus"
          :label="$t('organizationForm.actions.removeContact')"
          iconPos="left"
          severity="secondary"
          text
          size="small"
          @click="removeContact(index)"
        />
        <div />

        <InputField
          :name="`organizationContacts[${index}].fio`"
          :label="$t('organizationForm.fields.contact.fio')"
          class="col-span-1"
        />

        <InputField
          :name="`organizationContacts[${index}].title`"
          :label="$t('organizationForm.fields.contact.title')"
          class="col-span-1"
        />

        <InputField
          :name="`organizationContacts[${index}].phone`"
          :label="$t('organizationForm.fields.contact.phone')"
          class="col-span-1"
        />

        <InputField
          :name="`organizationContacts[${index}].email`"
          :label="$t('organizationForm.fields.contact.email')"
          class="col-span-1"
        />
      </div>

      <Button
        icon="pi pi-plus"
        class="col-span-2"
        :label="$t('organizationForm.actions.addContact')"
        iconPos="left"
        severity="secondary"
        text
        size="small"
        @click="addContact"
      />
    </fieldset>

    <div class="flex gap-3 w-full">
      <Button type="submit" :label="$t('actions.send')" :disabled="!meta.valid" />
      <SignCheckbox v-model="isSigningEnabled" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { toTypedSchema } from '@vee-validate/zod';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import { useFieldArray, useForm } from 'vee-validate';
import type {
  OrganizationContactType,
  OrganizationType,
} from '@/model/organization/organization.types.ts';
import {
  OrganizationZodSchema,
  type OrganizationZodType,
} from '@/model/organization/organization.zod.ts';
import DateField from '@/shared/components/date-field/DateField.vue';
import InputField from '@/shared/components/input-field/InputField.vue';
import RadioField, { type RadioFieldOption } from '@/shared/components/radio-field/RadioField.vue';
import SignCheckbox from '@/view/feature/sign/SignCheckbox.vue';

const emits = defineEmits<{ submit: [OrganizationZodType, boolean] }>();
const props = defineProps<{
  initialValues: OrganizationType;
  taxationOptions: RadioFieldOption[];
}>();

const isSigningEnabled = ref(false);
const { handleSubmit, meta } = useForm({
  validationSchema: toTypedSchema(OrganizationZodSchema),
  initialValues: {
    ...props.initialValues,
  },
});

// Динамические контакты
const {
  fields: contactFields,
  push: pushContact,
  remove: removeContact,
} = useFieldArray<OrganizationContactType>('organizationContacts');

// Добавление нового контакта
const addContact = () => {
  pushContact({
    fio: '',
    email: '',
    phone: '',
    title: '',
  });
};

const onSubmit = handleSubmit((data) => {
  emits('submit', data, isSigningEnabled.value);
});
</script>
