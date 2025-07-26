<template>
  <form class="flex flex-column gap-4" @submit.prevent="onSubmit">
    <!-- Основное -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.main') }}</legend>

      <!-- Название -->
      <IftaLabel class="flex flex-column gap-2 w-full">
        <InputText
          id="fullName"
          :invalid="!!errors.fullName"
          :model-value="values.fullName"
          @update:model-value="(value) => setFieldValue('fullName', value)"
        />
        <label for="fullName">{{ $t('organization.fields.fullName') }}</label>
        <Message v-if="errors.fullName" severity="error" size="small" variant="simple">
          {{ errors.fullName }}
        </Message>
      </IftaLabel>

      <!-- ИНН / ОГРН -->
      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText
          id="inn"
          :invalid="!!errors.inn"
          :model-value="values.inn"
          @update:model-value="(value) => setFieldValue('inn', value)"
        />
        <label for="inn">{{ $t('organization.fields.inn') }}</label>
        <Message v-if="errors.inn" severity="error" size="small" variant="simple">
          {{ errors.inn }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText
          id="ogrn"
          :invalid="!!errors.ogrn"
          :model-value="values.ogrn"
          @update:model-value="(value) => setFieldValue('ogrn', value)"
        />
        <label for="ogrn">{{ $t('organization.fields.ogrn') }}</label>
        <Message v-if="errors.ogrn" severity="error" size="small" variant="simple">
          {{ errors.ogrn }}
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
              :invalid="!!errors['taxation.id']"
              :value="option.id"
              :model-value="values.taxation?.id"
              @update:model-value="(value) => setFieldValue('taxation.id', value)"
            />
            <label :for="`taxation-${option.id}`">{{ option.label }}</label>
          </template>
        </div>

        <Message v-if="errors['taxation.id']" severity="error" size="small" variant="simple">
          {{ errors['taxation.id'] }}
        </Message>
      </div>
    </fieldset>

    <Divider />

    <!-- Документ -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.document') }}</legend>

      <IftaLabel class="flex flex-column gap-2 w-full">
        <InputText
          id="idType"
          :invalid="!!errors['ipIdentity.idType.name']"
          :model-value="values.ipIdentity?.idType?.name"
          @update:model-value="(value) => setFieldValue('ipIdentity.idType.name', value)"
        />
        <label for="idType">{{ $t('organization.fields.idType') }}</label>
        <Message
          v-if="errors['ipIdentity.idType.name']"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ errors['ipIdentity.idType.name'] }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText
          id="idNumber"
          :invalid="!!errors['ipIdentity.idNumber']"
          :model-value="values.ipIdentity?.idNumber"
          @update:model-value="(value) => setFieldValue('ipIdentity.idNumber', value)"
        />
        <label for="idNumber">{{ $t('organization.fields.idNumber') }}</label>
        <Message
          v-if="errors['ipIdentity.idNumber']"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ errors['ipIdentity.idNumber'] }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <DatePicker
          input-id="idIssueDate"
          :invalid="!!errors['ipIdentity.idIssueDate']"
          :model-value="values.ipIdentity?.idIssueDate"
          @update:model-value="(value) => setFieldValue('ipIdentity.idIssueDate', value)"
          dateFormat="yy-mm-dd"
        />
        <label for="idIssueDate">{{ $t('organization.fields.idIssueDate') }}</label>
        <Message
          v-if="errors['ipIdentity.idIssueDate']"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ errors['ipIdentity.idIssueDate'] }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 w-full">
        <InputText
          id="idIssuer"
          :invalid="!!errors['ipIdentity.idIssuer']"
          :model-value="values.ipIdentity?.idIssuer"
          @update:model-value="(value) => setFieldValue('ipIdentity.idIssuer', value)"
        />
        <label for="idIssuer">{{ $t('organization.fields.idIssuer') }}</label>
        <Message
          v-if="errors['ipIdentity.idIssuer']"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ errors['ipIdentity.idIssuer'] }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 w-full">
        <InputText
          id="idRegAddress"
          :invalid="!!errors['ipIdentity.idRegAddress']"
          :model-value="values.ipIdentity?.idRegAddress"
          @update:model-value="(value) => setFieldValue('ipIdentity.idRegAddress', value)"
        />
        <label for="idRegAddress">{{ $t('organization.fields.idRegAddress') }}</label>
        <Message
          v-if="errors['ipIdentity.idRegAddress']"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ errors['ipIdentity.idRegAddress'] }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 w-4">
        <DatePicker
          input-id="idBirthdate"
          :invalid="!!errors['ipIdentity.idBirthdate']"
          :model-value="values.ipIdentity?.idBirthdate"
          @update:model-value="(value) => setFieldValue('ipIdentity.idBirthdate', value)"
          dateFormat="yy-mm-dd"
        />
        <label for="idBirthdate">{{ $t('organization.fields.idBirthdate') }}</label>
        <Message
          v-if="errors['ipIdentity.idBirthdate']"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ errors['ipIdentity.idBirthdate'] }}
        </Message>
      </IftaLabel>
    </fieldset>

    <Divider />

    <!-- Адреса -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.address') }}</legend>

      <IftaLabel class="flex flex-column gap-2 w-full">
        <InputText
          id="postAddress"
          :invalid="!!errors.postAddress"
          :model-value="values.postAddress"
          @update:model-value="(value) => setFieldValue('postAddress', value)"
        />
        <label for="postAddress">{{ $t('organization.fields.postAddress') }}</label>
        <Message v-if="errors.postAddress" severity="error" size="small" variant="simple">
          {{ errors.postAddress }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 w-full">
        <InputText
          id="factAddress"
          :invalid="!!errors.factAddress"
          :model-value="values.factAddress"
          @update:model-value="(value) => setFieldValue('factAddress', value)"
        />
        <label for="factAddress">{{ $t('organization.fields.factAddress') }}</label>
        <Message v-if="errors.factAddress" severity="error" size="small" variant="simple">
          {{ errors.factAddress }}
        </Message>
      </IftaLabel>
    </fieldset>

    <!-- Контакты -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.mainContact') }}</legend>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText
          id="phone"
          :invalid="!!errors.phone"
          :model-value="values.phone"
          @update:model-value="(value) => setFieldValue('phone', value)"
        />
        <label for="phone">{{ $t('organization.fields.phone') }}</label>
        <Message v-if="errors.phone" severity="error" size="small" variant="simple">
          {{ errors.phone }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText
          id="email"
          :invalid="!!errors.email"
          :model-value="values.email"
          @update:model-value="(value) => setFieldValue('email', value)"
        />
        <label for="email">{{ $t('organization.fields.email') }}</label>
        <Message v-if="errors.email" severity="error" size="small" variant="simple">
          {{ errors.email }}
        </Message>
      </IftaLabel>
    </fieldset>

    <!-- Контакты по реквизитам -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.rekvContacts') }}</legend>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText
          id="rekvPhone"
          :invalid="!!errors['sendRekvContact.phone']"
          :model-value="values.sendRekvContact?.phone"
          @update:model-value="(value) => setFieldValue('sendRekvContact.phone', value)"
        />
        <label for="rekvPhone">{{ $t('organization.fields.rekvPhone') }}</label>
        <Message
          v-if="errors['sendRekvContact.phone']"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ errors['sendRekvContact.phone'] }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText
          id="rekvEmail"
          :invalid="!!errors['sendRekvContact.email']"
          :model-value="values.sendRekvContact?.email"
          @update:model-value="(value) => setFieldValue('sendRekvContact.email', value)"
        />
        <label for="rekvEmail">{{ $t('organization.fields.rekvEmail') }}</label>
        <Message
          v-if="errors['sendRekvContact.email']"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ errors['sendRekvContact.email'] }}
        </Message>
      </IftaLabel>
    </fieldset>

    <Divider />

    <!-- Прочие контакты -->
    <fieldset class="flex flex-wrap gap-3">
      <legend class="h2-bold pb-3">{{ $t('organization.fieldset.contacts') }}</legend>

      <div
        class="flex flex-wrap gap-3"
        v-for="(orgCon, index) in values.organizationContacts"
        :key="`contact-${index}`"
      >
        <!-- ФИО -->
        <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
          <InputText
            :id="`contact-fio-${index}`"
            :model-value="orgCon.fio"
            @update:model-value="
              (value) => setFieldValue(`organizationContacts[${index}].fio`, value)
            "
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
            :model-value="orgCon.title"
            @update:model-value="
              (value) => setFieldValue(`organizationContacts[${index}].title`, value)
            "
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
            :model-value="orgCon.phone"
            @update:model-value="
              (value) => setFieldValue(`organizationContacts[${index}].phone`, value)
            "
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
            :model-value="orgCon.email"
            @update:model-value="
              (value) => setFieldValue(`organizationContacts[${index}].email`, value)
            "
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

    <!-- Отправка -->
    <div class="form-actions">
      <Button
        :disabled="!meta.valid"
        :label="$t('organization.actions.send')"
        type="submit"
        size="large"
      />
    </div>
  </form>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import Divider from 'primevue/divider';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import RadioButton from 'primevue/radiobutton';
import { useForm } from 'vee-validate';
import type { OrganizationType } from '@/api/organization/organization.types.ts';
import { dialogs } from '@/config/dialog.ts';
import { organizationValidationSchema } from '@/model/organization/organization-validation-scheme.ts';
import { useDialogStore } from '@/store/app/dialog.store.ts';

const props = defineProps<{ organization: OrganizationType }>();
const { meta, values, errors, setFieldValue, handleSubmit } = useForm({
  validationSchema: toTypedSchema(organizationValidationSchema),
  initialValues: {
    ...props.organization,
  },
});

const dialog = useDialogStore();

//TODO get from backend
const taxationOptions = [
  { id: 1, label: 'Общая' },
  { id: 2, label: 'Упрощённая' },
];

const onSubmit = handleSubmit((data) => {
  console.log('✅ Submitted data:', data);
  dialog.open(dialogs.ORGANIZATION_SENT_NOTICE);
});

const addContact = () => {
  let organizationContacts;

  if (values.organizationContacts) {
    organizationContacts = [
      ...values.organizationContacts,
      { fio: '', title: '', phone: '', email: '' },
    ];
  } else {
    organizationContacts = [{ fio: '', title: '', phone: '', email: '' }];
  }

  setFieldValue('organizationContacts', organizationContacts);
};

const removeContact = (index: number) => {
  if (values.organizationContacts) {
    setFieldValue(
      'organizationContacts',
      values.organizationContacts.filter((_, idx) => idx !== index),
    );
  }
};
</script>
