<template>
  <div class="flex flex-column gap-3">
    <!-- Основное -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.main') }}</legend>

      <!-- Название -->
      <InputField
        v-model="fullNameValue"
        :error="fullNameError"
        :label="$t('organization.fields.fullName')"
      />

      <InputField
        v-model="innValue"
        :error="innError"
        :label="$t('organization.fields.inn')"
        class="flex-basics-w6-g3 w-6"
      />
      <InputField
        v-model="ogrnValue"
        :error="ogrnError"
        :label="$t('organization.fields.ogrn')"
        class="flex-basics-w6-g3 w-6"
      />

      <!-- Система налогообложения -->
      <RadioField
        :options="taxationOptions"
        v-model="taxationIdValue"
        :error="taxationIdError"
        :label="$t('organization.fields.taxation')"
        class="mt-2"
      />
    </fieldset>

    <Divider />

    <!-- Документ -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.document') }}</legend>

      <InputField
        v-model="idTypeNameValue"
        :error="idTypeNameError"
        :label="$t('organization.fields.idType')"
        class="w-full"
      />

      <InputField
        v-model="idNumberValue"
        :error="idNumberError"
        :label="$t('organization.fields.idNumber')"
        class="flex-basics-w6-g3 w-6"
      />

      <!-- TODO починить, либо дата, либо строка -->
      <DateField
        v-model="idIssueDateValue"
        :error="idIssueDateError"
        :label="$t('organization.fields.idIssueDate')"
        class="w-4"
      />

      <InputField
        v-model="idIssuerValue"
        :error="idIssuerError"
        :label="$t('organization.fields.idIssuer')"
        class="w-full"
      />

      <InputField
        v-model="idRegAddressValue"
        :error="idRegAddressError"
        :label="$t('organization.fields.idRegAddress')"
        class="w-full"
      />

      <!-- TODO починить, либо дата, либо строка -->
      <DateField
        v-model="idBirthdateValue"
        :error="idBirthdateError"
        :label="$t('organization.fields.idBirthdate')"
        class="w-4"
      />
    </fieldset>

    <Divider />

    <!-- Адреса -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.address') }}</legend>

      <InputField
        v-model="postAddressValue"
        :error="postAddressError"
        :label="$t('organization.fields.postAddress')"
        class="w-full"
      />

      <InputField
        v-model="factAddressValue"
        :error="factAddressError"
        :label="$t('organization.fields.factAddress')"
        class="w-full"
      />
    </fieldset>

    <!-- Контакты -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.mainContact') }}</legend>

      <InputField
        v-model="phoneValue"
        :error="phoneError"
        :label="$t('organization.fields.phone')"
        class="flex-basics-w6-g3 w-6"
      />

      <InputField
        v-model="emailValue"
        :error="emailError"
        :label="$t('organization.fields.email')"
        class="flex-basics-w6-g3 w-6"
      />
    </fieldset>

    <!-- Контакты по реквизитам -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.rekvContacts') }}</legend>

      <InputField
        v-model="rekvPhoneValue"
        :error="rekvPhoneError"
        :label="$t('organization.fields.rekvPhone')"
        class="flex-basics-w6-g3 w-6"
      />

      <InputField
        v-model="rekvEmailValue"
        :error="rekvEmailError"
        :label="$t('organization.fields.rekvEmail')"
        class="flex-basics-w6-g3 w-6"
      />
    </fieldset>

    <Divider />

    <!-- Прочие контакты -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.contacts') }}</legend>

      <div class="flex flex-wrap gap-3" v-for="(field, index) in contactFields" :key="field.key">
        <!-- ФИО -->
        <InputField
          v-model="field.value.fio"
          :error="errors[`organizationContacts[${index}].fio`]"
          :label="$t('organization.fields.contact.fio')"
          class="flex-basics-w6-g3 w-6"
        />

        <!-- Должность -->
        <InputField
          v-model="field.value.title"
          :error="errors[`organizationContacts[${index}].title`]"
          :label="$t('organization.fields.contact.title')"
          class="flex-basics-w6-g3 w-6"
        />

        <!-- Телефон -->
        <InputField
          v-model="field.value.phone"
          :error="errors[`organizationContacts[${index}].phone`]"
          :label="$t('organization.fields.contact.phone')"
          class="flex-basics-w6-g3 w-6"
        />

        <!-- Email -->
        <InputField
          v-model="field.value.email"
          :error="errors[`organizationContacts[${index}].email`]"
          :label="$t('organization.fields.contact.email')"
          class="flex-basics-w6-g3 w-6"
        />

        <!-- Кнопка удаления -->
        <Button
          icon="pi pi-minus"
          :label="$t('organization.actions.removeContact')"
          iconPos="left"
          severity="secondary"
          text
          size="small"
          @click="removeContact(index)"
        />
      </div>

      <!-- Кнопка добавления -->
      <Button
        icon="pi pi-plus"
        class="w-full"
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
