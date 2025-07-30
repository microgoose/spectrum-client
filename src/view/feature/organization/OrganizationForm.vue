<template>
  <div class="flex flex-column gap-5">
    <!-- Основное -->
    <fieldset class="grid grid-cols-2 gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.main') }}</legend>

      <!-- Название -->
      <InputField
        v-model="fullNameValue"
        :error="fullNameError"
        :label="$t('organization.fields.fullName')"
        class="col-span-2"
      />

      <InputField
        v-model="innValue"
        :error="innError"
        :label="$t('organization.fields.inn')"
        class="col-span-1"
      />
      <InputField
        v-model="ogrnValue"
        :error="ogrnError"
        :label="$t('organization.fields.ogrn')"
        class="col-span-1"
      />

      <!-- Система налогообложения -->
      <RadioField
        :options="taxationOptions"
        v-model="taxationIdValue"
        :error="taxationIdError"
        :label="$t('organization.fields.taxation')"
        class="col-span-2"
      />
    </fieldset>

    <Divider />

    <!-- Документ -->
    <fieldset class="grid grid-cols-2 gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.document') }}</legend>

      <InputField
        v-model="idTypeNameValue"
        :error="idTypeNameError"
        :label="$t('organization.fields.idType')"
        class="col-span-2"
      />

      <InputField
        v-model="idNumberValue"
        :error="idNumberError"
        :label="$t('organization.fields.idNumber')"
        class="col-span-1"
      />

      <!-- TODO починить, либо дата, либо строка -->
      <DateField
        v-model="idIssueDateValue"
        :error="idIssueDateError"
        :label="$t('organization.fields.idIssueDate')"
        class="col-span-1"
      />

      <InputField
        v-model="idIssuerValue"
        :error="idIssuerError"
        :label="$t('organization.fields.idIssuer')"
        class="col-span-2"
      />

      <InputField
        v-model="idRegAddressValue"
        :error="idRegAddressError"
        :label="$t('organization.fields.idRegAddress')"
        class="col-span-2"
      />

      <!-- TODO починить, либо дата, либо строка -->
      <DateField
        v-model="idBirthdateValue"
        :error="idBirthdateError"
        :label="$t('organization.fields.idBirthdate')"
      />
    </fieldset>

    <Divider />

    <!-- Адреса -->
    <fieldset class="grid grid-cols-2 gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.address') }}</legend>

      <InputField
        v-model="postAddressValue"
        :error="postAddressError"
        :label="$t('organization.fields.postAddress')"
        class="col-span-2"
      />

      <InputField
        v-model="factAddressValue"
        :error="factAddressError"
        :label="$t('organization.fields.factAddress')"
        class="col-span-2"
      />
    </fieldset>

    <!-- Контакты -->
    <fieldset class="grid grid-cols-2 gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.mainContact') }}</legend>

      <InputField
        v-model="phoneValue"
        :error="phoneError"
        :label="$t('organization.fields.phone')"
        class="col-span-1"
      />

      <InputField
        v-model="emailValue"
        :error="emailError"
        :label="$t('organization.fields.email')"
        class="col-span-1"
      />
    </fieldset>

    <!-- Контакты по реквизитам -->
    <fieldset class="grid grid-cols-2 gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.rekvContacts') }}</legend>

      <InputField
        v-model="rekvPhoneValue"
        :error="rekvPhoneError"
        :label="$t('organization.fields.rekvPhone')"
        class="col-span-1"
      />

      <InputField
        v-model="rekvEmailValue"
        :error="rekvEmailError"
        :label="$t('organization.fields.rekvEmail')"
        class="col-span-1"
      />
    </fieldset>

    <Divider />

    <!-- Прочие контакты -->
    <fieldset class="flex flex-column gap-4">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.contacts') }}</legend>

      <div class="grid grid-cols-2 gap-3" v-for="(field, index) in contactFields" :key="field.key">
        <!-- Кнопка удаления -->
        <Button
          class="w-5"
          icon="pi pi-minus"
          :label="$t('organization.actions.removeContact')"
          iconPos="left"
          severity="secondary"
          text
          size="small"
          @click="removeContact(index)"
        />
        <div />
        <!-- ФИО -->
        <InputField
          v-model="field.value.fio"
          :error="errors[`organizationContacts[${index}].fio`]"
          :label="$t('organization.fields.contact.fio')"
          class="col-span-1"
        />

        <!-- Должность -->
        <InputField
          v-model="field.value.title"
          :error="errors[`organizationContacts[${index}].title`]"
          :label="$t('organization.fields.contact.title')"
          class="col-span-1"
        />

        <!-- Телефон -->
        <InputField
          v-model="field.value.phone"
          :error="errors[`organizationContacts[${index}].phone`]"
          :label="$t('organization.fields.contact.phone')"
          class="col-span-1"
        />

        <!-- Email -->
        <InputField
          v-model="field.value.email"
          :error="errors[`organizationContacts[${index}].email`]"
          :label="$t('organization.fields.contact.email')"
          class="col-span-1"
        />
      </div>

      <!-- Кнопка добавления -->
      <Button
        icon="pi pi-plus"
        class="col-span-2"
        :label="$t('organization.actions.addContact')"
        iconPos="left"
        severity="secondary"
        text
        size="small"
        @click="addContact"
      />
    </fieldset>

    <div class="flex gap-3 w-full">
      <Button
        :label="$t('sendDocumentWidget.actions.send')"
        :disabled="!meta.valid"
        @click="onSubmit"
      />
      <SignCheckbox v-model="isSigningEnabled" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { toTypedSchema } from '@vee-validate/zod';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import { useField, useFieldArray, useForm } from 'vee-validate';
import type {
  OrganizationContactType,
  OrganizationType,
} from '@/api/organization/organization.types.ts';
import { organizationValidationSchema } from '@/model/organization/organization-validation-scheme.ts';
import DateField from '@/shared/components/date-field/DateField.vue';
import InputField from '@/shared/components/input-field/InputField.vue';
import RadioField from '@/shared/components/radio-field/RadioField.vue';
import SignCheckbox from '@/view/feature/sign/SignCheckbox.vue';

const emits = defineEmits(['submit']);
const props = defineProps<{ organization: OrganizationType }>();
const isSigningEnabled = ref(false);

// Инициализация формы
const { handleSubmit, meta, errors } = useForm({
  validateOnMount: false,
  validationSchema: toTypedSchema(organizationValidationSchema),
  initialValues: {
    ...props.organization,
  },
});

// Основные поля
const { value: fullNameValue, errorMessage: fullNameError } = useField<string>('fullName');
const { value: innValue, errorMessage: innError } = useField<string>('inn');
const { value: ogrnValue, errorMessage: ogrnError } = useField<string>('ogrn');
const { value: taxationIdValue, errorMessage: taxationIdError } = useField<number>('taxation.id');

// Поля документа
const { value: idTypeNameValue, errorMessage: idTypeNameError } =
  useField<string>('ipIdentity.idType.name');
const { value: idNumberValue, errorMessage: idNumberError } =
  useField<string>('ipIdentity.idNumber');
const { value: idIssueDateValue, errorMessage: idIssueDateError } =
  useField<string>('ipIdentity.idIssueDate');
const { value: idIssuerValue, errorMessage: idIssuerError } =
  useField<string>('ipIdentity.idIssuer');
const { value: idRegAddressValue, errorMessage: idRegAddressError } =
  useField<string>('ipIdentity.idRegAddress');
const { value: idBirthdateValue, errorMessage: idBirthdateError } =
  useField<string>('ipIdentity.idBirthdate');

// Адреса
const { value: postAddressValue, errorMessage: postAddressError } = useField<string>('postAddress');
const { value: factAddressValue, errorMessage: factAddressError } = useField<string>('factAddress');

// Контакты
const { value: phoneValue, errorMessage: phoneError } = useField<string>('phone');
const { value: emailValue, errorMessage: emailError } = useField<string>('email');
const { value: rekvPhoneValue, errorMessage: rekvPhoneError } =
  useField<string>('sendRekvContact.phone');
const { value: rekvEmailValue, errorMessage: rekvEmailError } =
  useField<string>('sendRekvContact.email');

// Динамические контакты
const {
  fields: contactFields,
  push: pushContact,
  remove: removeContact,
} = useFieldArray<OrganizationContactType>('organizationContacts');

// Обработчик отправки формы
const onSubmit = handleSubmit(() => {
  emits('submit');
});

// Добавление нового контакта
const addContact = () => {
  pushContact({
    fio: '',
    email: '',
    phone: '',
    title: '',
  });
};

// TODO: данные с бэкенда
const taxationOptions = [
  { value: 1, label: 'Общая' },
  { value: 2, label: 'Упрощённая' },
];
</script>
