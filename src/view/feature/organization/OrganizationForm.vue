<template>
  <div class="flex flex-column gap-3">
    <!-- Основное -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.main') }}</legend>

      <!-- Название -->
      <IftaLabel class="flex flex-column gap-2 w-full">
        <InputText id="fullName" :invalid="!!fullNameError" v-model="fullNameValue" />
        <label for="fullName">{{ $t('organization.fields.fullName') }}</label>
        <Message v-if="fullNameError" severity="error" size="small" variant="simple">
          {{ fullNameError }}
        </Message>
      </IftaLabel>

      <!-- ИНН / ОГРН -->
      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText id="inn" :invalid="!!innError" v-model="innValue" />
        <label for="inn">{{ $t('organization.fields.inn') }}</label>
        <Message v-if="innError" severity="error" size="small" variant="simple">
          {{ innError }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText id="ogrn" :invalid="!!ogrnError" v-model="ogrnValue" />
        <label for="ogrn">{{ $t('organization.fields.ogrn') }}</label>
        <Message v-if="ogrnError" severity="error" size="small" variant="simple">
          {{ ogrnError }}
        </Message>
      </IftaLabel>

      <!-- Система налогообложения -->
      <div class="flex flex-column gap-3 mt-2">
        <span class="text-400 subtext">{{ $t('organization.fields.taxation') }}</span>
        <div class="flex gap-2">
          <template v-for="option in taxationOptions" :key="option.id">
            <RadioButton
              name="taxation"
              :input-id="`taxation-${option.id}`"
              :invalid="!!taxationIdError"
              :value="option.id"
              v-model="taxationIdValue"
            />
            <label :for="`taxation-${option.id}`">{{ option.label }}</label>
          </template>
        </div>

        <Message v-if="taxationIdError" severity="error" size="small" variant="simple">
          {{ taxationIdError }}
        </Message>
      </div>
    </fieldset>

    <Divider />

    <!-- Документ -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.document') }}</legend>

      <IftaLabel class="flex flex-column gap-2 w-full">
        <InputText id="idType" :invalid="!!idTypeNameError" v-model="idTypeNameValue" />
        <label for="idType">{{ $t('organization.fields.idType') }}</label>
        <Message v-if="idTypeNameError" severity="error" size="small" variant="simple">
          {{ idTypeNameError }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText id="idNumber" :invalid="!!idNumberError" v-model="idNumberValue" />
        <label for="idNumber">{{ $t('organization.fields.idNumber') }}</label>
        <Message v-if="idNumberError" severity="error" size="small" variant="simple">
          {{ idNumberError }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <DatePicker
          input-id="idIssueDate"
          :invalid="!!idIssueDateError"
          v-model="idIssueDateValue"
          dateFormat="yy-mm-dd"
        />
        <label for="idIssueDate">{{ $t('organization.fields.idIssueDate') }}</label>
        <Message v-if="idIssueDateError" severity="error" size="small" variant="simple">
          {{ idIssueDateError }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 w-full">
        <InputText id="idIssuer" :invalid="!!idIssuerError" v-model="idIssuerValue" />
        <label for="idIssuer">{{ $t('organization.fields.idIssuer') }}</label>
        <Message v-if="idIssuerError" severity="error" size="small" variant="simple">
          {{ idIssuerError }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 w-full">
        <InputText id="idRegAddress" :invalid="!!idRegAddressError" v-model="idRegAddressValue" />
        <label for="idRegAddress">{{ $t('organization.fields.idRegAddress') }}</label>
        <Message v-if="idRegAddressError" severity="error" size="small" variant="simple">
          {{ idRegAddressError }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 w-4">
        <DatePicker
          input-id="idBirthdate"
          :invalid="!!idBirthdateError"
          v-model="idBirthdateValue"
          dateFormat="yy-mm-dd"
        />
        <label for="idBirthdate">{{ $t('organization.fields.idBirthdate') }}</label>
        <Message v-if="idBirthdateError" severity="error" size="small" variant="simple">
          {{ idBirthdateError }}
        </Message>
      </IftaLabel>
    </fieldset>

    <Divider />

    <!-- Адреса -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.address') }}</legend>

      <IftaLabel class="flex flex-column gap-2 w-full">
        <InputText id="postAddress" :invalid="!!postAddressError" v-model="postAddressValue" />
        <label for="postAddress">{{ $t('organization.fields.postAddress') }}</label>
        <Message v-if="postAddressError" severity="error" size="small" variant="simple">
          {{ postAddressError }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 w-full">
        <InputText id="factAddress" :invalid="!!factAddressError" v-model="factAddressValue" />
        <label for="factAddress">{{ $t('organization.fields.factAddress') }}</label>
        <Message v-if="factAddressError" severity="error" size="small" variant="simple">
          {{ factAddressError }}
        </Message>
      </IftaLabel>
    </fieldset>

    <!-- Контакты -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.mainContact') }}</legend>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText id="phone" :invalid="!!phoneError" v-model="phoneValue" />
        <label for="phone">{{ $t('organization.fields.phone') }}</label>
        <Message v-if="phoneError" severity="error" size="small" variant="simple">
          {{ phoneError }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText id="email" :invalid="!!emailError" v-model="emailValue" />
        <label for="email">{{ $t('organization.fields.email') }}</label>
        <Message v-if="emailError" severity="error" size="small" variant="simple">
          {{ emailError }}
        </Message>
      </IftaLabel>
    </fieldset>

    <!-- Контакты по реквизитам -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.rekvContacts') }}</legend>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText id="rekvPhone" :invalid="!!rekvPhoneError" v-model="rekvPhoneValue" />
        <label for="rekvPhone">{{ $t('organization.fields.rekvPhone') }}</label>
        <Message v-if="rekvPhoneError" severity="error" size="small" variant="simple">
          {{ rekvPhoneError }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText id="rekvEmail" :invalid="!!rekvEmailError" v-model="rekvEmailValue" />
        <label for="rekvEmail">{{ $t('organization.fields.rekvEmail') }}</label>
        <Message v-if="rekvEmailError" severity="error" size="small" variant="simple">
          {{ rekvEmailError }}
        </Message>
      </IftaLabel>
    </fieldset>

    <Divider />

    <!-- Прочие контакты -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.contacts') }}</legend>

      <div class="flex flex-wrap gap-3" v-for="(field, index) in contactFields" :key="field.key">
        <!-- ФИО -->
        <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
          <InputText
            :id="`contact-fio-${index}`"
            v-model="field.value.fio"
            :invalid="!!errors[`organizationContacts[${index}].fio`]"
          />
          <label :for="`contact-fio-${index}`">{{ $t('organization.fields.contact.fio') }}</label>
          <Message
            v-if="errors[`organizationContacts[${index}].fio`]"
            severity="error"
            size="small"
            variant="simple"
          >
            {{ errors[`organizationContacts[${index}].fio`] }}
          </Message>
        </IftaLabel>

        <!-- Должность -->
        <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
          <InputText
            :id="`contact-title-${index}`"
            v-model="field.value.title"
            :invalid="!!errors[`organizationContacts[${index}].title`]"
          />
          <label :for="`contact-title-${index}`">{{
            $t('organization.fields.contact.title')
          }}</label>
          <Message
            v-if="errors[`organizationContacts[${index}].title`]"
            severity="error"
            size="small"
            variant="simple"
          >
            {{ errors[`organizationContacts[${index}].title`] }}
          </Message>
        </IftaLabel>

        <!-- Телефон -->
        <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
          <InputText
            :id="`contact-phone-${index}`"
            v-model="field.value.phone"
            :invalid="!!errors[`organizationContacts[${index}].phone`]"
          />
          <label :for="`contact-phone-${index}`">{{
            $t('organization.fields.contact.phone')
          }}</label>
          <Message
            v-if="errors[`organizationContacts[${index}].phone`]"
            severity="error"
            size="small"
            variant="simple"
          >
            {{ errors[`organizationContacts[${index}].phone`] }}
          </Message>
        </IftaLabel>

        <!-- Email -->
        <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
          <InputText
            :id="`contact-email-${index}`"
            v-model="field.value.email"
            :invalid="!!errors[`organizationContacts[${index}].email`]"
          />
          <label :for="`contact-email-${index}`">{{
            $t('organization.fields.contact.email')
          }}</label>
          <Message
            v-if="errors[`organizationContacts[${index}].email`]"
            severity="error"
            size="small"
            variant="simple"
          >
            {{ errors[`organizationContacts[${index}].email`] }}
          </Message>
        </IftaLabel>

        <!-- Кнопка удаления -->
        <div>
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
import DatePicker from 'primevue/datepicker';
import Divider from 'primevue/divider';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import RadioButton from 'primevue/radiobutton';
import { useField, useFieldArray, useForm } from 'vee-validate';
import type {
  OrganizationContactType,
  OrganizationType,
} from '@/api/organization/organization.types.ts';
import { organizationValidationSchema } from '@/model/organization/organization-validation-scheme.ts';
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
  { id: 1, label: 'Общая' },
  { id: 2, label: 'Упрощённая' },
];
</script>
