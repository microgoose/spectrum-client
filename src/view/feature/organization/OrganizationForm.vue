<template>
  <Form :resolver="resolver" :initialValues="values" @submit="onSubmit" v-slot="$form">
    <FormGridView>
      <!-- Название -->
      <IftaLabel class="field field-w-full">
        <InputText id="fullName" name="fullName" />
        <label for="fullName">{{ $t('organization.fields.fullName') }}</label>
        <Message v-if="$form.fullName?.invalid" severity="error" size="small" variant="simple">
          {{ $form.fullName.error?.message }}
        </Message>
      </IftaLabel>

      <!-- ИНН / ОГРН -->
      <IftaLabel class="field">
        <InputText id="inn" name="inn" />
        <label for="inn">{{ $t('organization.fields.inn') }}</label>
        <Message v-if="$form.inn?.invalid" severity="error" size="small" variant="simple">
          {{ $form.inn.error?.message }}
        </Message>
      </IftaLabel>

      <IftaLabel class="field">
        <InputText id="ogrn" name="ogrn" />
        <label for="ogrn">{{ $t('organization.fields.ogrn') }}</label>
        <Message v-if="$form.ogrn?.invalid" severity="error" size="small" variant="simple">
          {{ $form.ogrn.error?.message }}
        </Message>
      </IftaLabel>

      <!-- Система налогообложения -->
      <IftaLabel class="field field-w-full">
        <InputText id="taxation.description" name="taxation.description" />
        <label for="taxation.description">{{ $t('organization.fields.taxation') }}</label>
        <Message
          v-if="$form['taxation.description']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['taxation.description'].error?.message }}
        </Message>
      </IftaLabel>

      <Divider />

      <!-- Документ -->
      <IftaLabel class="field field-w-full">
        <InputText id="idType" name="ipIdentity.idType.name" />
        <label for="idType">{{ $t('organization.fields.idType') }}</label>
        <Message
          v-if="$form['ipIdentity.idType.name']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['ipIdentity.idType.name'].error?.message }}
        </Message>
      </IftaLabel>

      <IftaLabel class="field">
        <InputText id="idNumber" name="ipIdentity.idNumber" />
        <label for="idNumber">{{ $t('organization.fields.idNumber') }}</label>
        <Message
          v-if="$form['ipIdentity.idNumber']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['ipIdentity.idNumber'].error?.message }}
        </Message>
      </IftaLabel>

      <IftaLabel class="field">
        <DatePicker input-id="idIssueDate" name="ipIdentity.idIssueDate" dateFormat="yy-mm-dd" />
        <label for="idIssueDate">{{ $t('organization.fields.idIssueDate') }}</label>
        <Message
          v-if="$form['ipIdentity.idIssueDate']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['ipIdentity.idIssueDate'].error?.message }}
        </Message>
      </IftaLabel>

      <IftaLabel class="field field-w-full">
        <InputText id="idIssuer" name="ipIdentity.idIssuer" />
        <label for="idIssuer">{{ $t('organization.fields.idIssuer') }}</label>
        <Message
          v-if="$form['ipIdentity.idIssuer']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['ipIdentity.idIssuer'].error?.message }}
        </Message>
      </IftaLabel>

      <IftaLabel class="field field-w-full">
        <InputText id="idRegAddress" name="ipIdentity.idRegAddress" />
        <label for="idRegAddress">{{ $t('organization.fields.idRegAddress') }}</label>
        <Message
          v-if="$form['ipIdentity.idRegAddress']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['ipIdentity.idRegAddress'].error?.message }}
        </Message>
      </IftaLabel>

      <IftaLabel class="field">
        <DatePicker input-id="idBirthdate" name="ipIdentity.idBirthdate" dateFormat="yy-mm-dd" />
        <label for="idBirthdate">{{ $t('organization.fields.idBirthdate') }}</label>
        <Message
          v-if="$form['ipIdentity.idBirthdate']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['ipIdentity.idBirthdate'].error?.message }}
        </Message>
      </IftaLabel>

      <Divider />

      <!-- Адреса -->
      <IftaLabel class="field field-w-full">
        <InputText id="postAddress" name="postAddress" />
        <label for="postAddress">{{ $t('organization.fields.postAddress') }}</label>
        <Message v-if="$form.postAddress?.invalid" severity="error" size="small" variant="simple">
          {{ $form.postAddress.error?.message }}
        </Message>
      </IftaLabel>

      <IftaLabel class="field field-w-full">
        <InputText id="factAddress" name="factAddress" />
        <label for="factAddress">{{ $t('organization.fields.factAddress') }}</label>
        <Message v-if="$form.factAddress?.invalid" severity="error" size="small" variant="simple">
          {{ $form.factAddress.error?.message }}
        </Message>
      </IftaLabel>

      <!-- Контакты -->
      <IftaLabel class="field">
        <InputText id="phone" name="phone" />
        <label for="phone">{{ $t('organization.fields.phone') }}</label>
        <Message v-if="$form.phone?.invalid" severity="error" size="small" variant="simple">
          {{ $form.phone.error?.message }}
        </Message>
      </IftaLabel>

      <IftaLabel class="field">
        <InputText id="email" name="email" />
        <label for="email">{{ $t('organization.fields.email') }}</label>
        <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">
          {{ $form.email.error?.message }}
        </Message>
      </IftaLabel>

      <!-- Контакты по реквизитам -->
      <IftaLabel class="field field-w-full">
        <InputText id="rekvPhone" name="sendRekvContact.phone" />
        <label for="rekvPhone">{{ $t('organization.fields.rekvPhone') }}</label>
        <Message
          v-if="$form['sendRekvContact.phone']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['sendRekvContact.phone'].error?.message }}
        </Message>
      </IftaLabel>

      <IftaLabel class="field field-w-full">
        <InputText id="rekvEmail" name="sendRekvContact.email" />
        <label for="rekvEmail">{{ $t('organization.fields.rekvEmail') }}</label>
        <Message
          v-if="$form['sendRekvContact.email']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['sendRekvContact.email'].error?.message }}
        </Message>
      </IftaLabel>

      <!-- Кнопка -->
      <div class="form-actions">
        <Button :label="$t('organization.actions.send')" type="submit" size="large" />
      </div>
    </FormGridView>
  </Form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Form, type FormSubmitEvent } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import Divider from 'primevue/divider';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import type { OrganizationType } from '@/api/organization/organization.types.ts';
import { dialogs } from '@/config/dialog.ts';
import { organizationValidationSchema } from '@/model/organization/organization-validation.scheme.ts';
import FormGridView from '@/shared/components/form/FormGridView.vue';
import { useDialogStore } from '@/store/app/dialog.store.ts';

const emits = defineEmits(['submit']);
const props = defineProps<{ organization: OrganizationType }>();
const resolver = ref(zodResolver(organizationValidationSchema));
const values = reactive<OrganizationType>({ ...props.organization });
const dialog = useDialogStore();

const onSubmit = async ({ valid }: FormSubmitEvent) => {
  if (valid) {
    const result = await dialog.open(dialogs.ORGANIZATION_SENT_NOTICE);

    if (result) {
      emits('submit');
    }
  }
};
</script>
