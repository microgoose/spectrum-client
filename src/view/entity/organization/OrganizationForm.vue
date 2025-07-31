<template>
  <div class="flex flex-column gap-5">
    <!-- Основное -->
    <fieldset class="grid grid-cols-2 gap-3">
      <legend class="h2-bold pb-3">{{ $t('organizationForm.fieldset.main') }}</legend>

      <!-- Название -->
      <InputField
        v-model="fullNameValue"
        :error="fullNameError"
        :label="$t('organizationForm.fields.fullName')"
        class="col-span-2"
      />

      <InputField
        v-model="innValue"
        :error="innError"
        :label="$t('organizationForm.fields.inn')"
        class="col-span-1"
      />
      <InputField
        v-model="ogrnValue"
        :error="ogrnError"
        :label="$t('organizationForm.fields.ogrn')"
        class="col-span-1"
      />

      <!-- Система налогообложения -->
      <RadioField
        :options="taxationOptions"
        v-model="taxationIdValue"
        :error="taxationIdError"
        :label="$t('organizationForm.fields.taxation')"
        class="col-span-2"
      />
    </fieldset>

    <Divider />

    <!-- Документ -->
    <fieldset class="grid grid-cols-2 gap-3">
      <legend class="h2-bold pb-3">{{ $t('organizationForm.fieldset.document') }}</legend>

      <InputField
        v-model="idTypeNameValue"
        :error="idTypeNameError"
        :label="$t('organizationForm.fields.idType')"
        class="col-span-2"
      />

      <InputField
        v-model="idNumberValue"
        :error="idNumberError"
        :label="$t('organizationForm.fields.idNumber')"
        class="col-span-1"
      />

      <!-- TODO починить, либо дата, либо строка -->
      <DateField
        v-model="idIssueDateValue"
        :error="idIssueDateError"
        :label="$t('organizationForm.fields.idIssueDate')"
        class="col-span-1"
      />

      <InputField
        v-model="idIssuerValue"
        :error="idIssuerError"
        :label="$t('organizationForm.fields.idIssuer')"
        class="col-span-2"
      />

      <InputField
        v-model="idRegAddressValue"
        :error="idRegAddressError"
        :label="$t('organizationForm.fields.idRegAddress')"
        class="col-span-2"
      />

      <!-- TODO починить, либо дата, либо строка -->
      <DateField
        v-model="idBirthdateValue"
        :error="idBirthdateError"
        :label="$t('organizationForm.fields.idBirthdate')"
      />
    </fieldset>

    <Divider />

    <!-- Адреса -->
    <fieldset class="grid grid-cols-2 gap-3">
      <legend class="h2-bold pb-3">{{ $t('organizationForm.fieldset.address') }}</legend>

      <InputField
        v-model="postAddressValue"
        :error="postAddressError"
        :label="$t('organizationForm.fields.postAddress')"
        class="col-span-2"
      />

      <InputField
        v-model="factAddressValue"
        :error="factAddressError"
        :label="$t('organizationForm.fields.factAddress')"
        class="col-span-2"
      />
    </fieldset>

    <!-- Контакты -->
    <fieldset class="grid grid-cols-2 gap-3">
      <legend class="h2-bold pb-3">{{ $t('organizationForm.fieldset.mainContact') }}</legend>

      <InputField
        v-model="phoneValue"
        :error="phoneError"
        :label="$t('organizationForm.fields.phone')"
        class="col-span-1"
      />

      <InputField
        v-model="emailValue"
        :error="emailError"
        :label="$t('organizationForm.fields.email')"
        class="col-span-1"
      />
    </fieldset>

    <!-- Контакты по реквизитам -->
    <fieldset class="grid grid-cols-2 gap-3">
      <legend class="h2-bold pb-3">{{ $t('organizationForm.fieldset.rekvContacts') }}</legend>

      <InputField
        v-model="rekvPhoneValue"
        :error="rekvPhoneError"
        :label="$t('organizationForm.fields.rekvPhone')"
        class="col-span-1"
      />

      <InputField
        v-model="rekvEmailValue"
        :error="rekvEmailError"
        :label="$t('organizationForm.fields.rekvEmail')"
        class="col-span-1"
      />
    </fieldset>

    <Divider />

    <!-- Прочие контакты -->
    <fieldset class="flex flex-column gap-4">
      <legend class="h2-bold pb-3">{{ $t('organizationForm.fieldset.contacts') }}</legend>

      <div class="grid grid-cols-2 gap-3" v-for="(field, index) in contactFields" :key="field.key">
        <!-- Кнопка удаления -->
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
        <!-- ФИО -->
        <InputField
          v-model="field.value.fio"
          :error="errors[`organizationContacts[${index}].fio`]"
          :label="$t('organizationForm.fields.contact.fio')"
          class="col-span-1"
        />

        <!-- Должность -->
        <InputField
          v-model="field.value.title"
          :error="errors[`organizationContacts[${index}].title`]"
          :label="$t('organizationForm.fields.contact.title')"
          class="col-span-1"
        />

        <!-- Телефон -->
        <InputField
          v-model="field.value.phone"
          :error="errors[`organizationContacts[${index}].phone`]"
          :label="$t('organizationForm.fields.contact.phone')"
          class="col-span-1"
        />

        <!-- Email -->
        <InputField
          v-model="field.value.email"
          :error="errors[`organizationContacts[${index}].email`]"
          :label="$t('organizationForm.fields.contact.email')"
          class="col-span-1"
        />
      </div>

      <!-- Кнопка добавления -->
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
      <Button :label="$t('actions.send')" :disabled="!meta.valid" @click="onSubmit" />
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
} from '@/model/organization/organization.types.ts';
import { organizationValidationSchema } from '@/model/organization/organization.validation-scheme.ts';
import DateField from '@/shared/components/date-field/DateField.vue';
import InputField from '@/shared/components/input-field/InputField.vue';
import RadioField, { type RadioFieldOption } from '@/shared/components/radio-field/RadioField.vue';
import SignCheckbox from '@/view/feature/sign/SignCheckbox.vue';

const emits = defineEmits<{ submit: [OrganizationType, boolean] }>();
const props = defineProps<{
  initialValues: OrganizationType;
  taxationOptions: RadioFieldOption[];
}>();
const isSigningEnabled = ref(false);

// Инициализация формы
const { handleSubmit, meta, errors } = useForm({
  validateOnMount: false,
  validationSchema: toTypedSchema(organizationValidationSchema),
  initialValues: {
    ...props.initialValues,
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

// Добавление нового контакта
const addContact = () => {
  pushContact({
    fio: '',
    email: '',
    phone: '',
    title: '',
  });
};

// Обработчик отправки формы
const onSubmit = handleSubmit((data: OrganizationType) => {
  emits('submit', data, isSigningEnabled.value);
});
</script>
