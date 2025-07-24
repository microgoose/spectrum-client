<style scoped>
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

.button-actions {
  display: flex;
  gap: 1rem;
  justify-content: end;
  width: 100%;
}
</style>

<template>
  <Form :resolver="resolver" :initialValues="values" @submit="onSubmit" v-slot="$form">
    <div class="form-grid">
      <!-- Название -->
      <div class="field full-width">
        <InputText name="fullName" :placeholder="$t('organization.fields.fullName')" />
        <Message v-if="$form.fullName?.invalid" severity="error" size="small" variant="simple">
          {{ $form.fullName.error?.message }}
        </Message>
      </div>

      <!-- ИНН / ОГРН -->
      <div class="field">
        <InputText name="inn" :placeholder="$t('organization.fields.inn')" />
        <Message v-if="$form.inn?.invalid" severity="error" size="small" variant="simple">
          {{ $form.inn.error?.message }}
        </Message>
      </div>

      <div class="field">
        <InputText name="ogrn" :placeholder="$t('organization.fields.ogrn')" />
        <Message v-if="$form.ogrn?.invalid" severity="error" size="small" variant="simple">
          {{ $form.ogrn.error?.message }}
        </Message>
      </div>

      <!-- Система налогообложения -->
      <div class="field full-width">
        <InputText name="taxation.description" :placeholder="$t('organization.fields.taxation')" />
        <Message
          v-if="$form['taxation.description']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['taxation.description'].error?.message }}
        </Message>
      </div>

      <!-- Документ -->
      <div class="field full-width">
        <InputText name="ipIdentity.idType.name" :placeholder="$t('organization.fields.idType')" />
        <Message
          v-if="$form['ipIdentity.idType.name']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['ipIdentity.idType.name'].error?.message }}
        </Message>
      </div>

      <div class="field">
        <InputText name="ipIdentity.idNumber" :placeholder="$t('organization.fields.idNumber')" />
        <Message
          v-if="$form['ipIdentity.idNumber']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['ipIdentity.idNumber'].error?.message }}
        </Message>
      </div>

      <div class="field">
        <DatePicker
          name="ipIdentity.idIssueDate"
          dateFormat="yy-mm-dd"
          :placeholder="$t('organization.fields.idIssueDate')"
        />
        <Message
          v-if="$form['ipIdentity.idIssueDate']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['ipIdentity.idIssueDate'].error?.message }}
        </Message>
      </div>

      <div class="field full-width">
        <InputText name="ipIdentity.idIssuer" :placeholder="$t('organization.fields.idIssuer')" />
        <Message
          v-if="$form['ipIdentity.idIssuer']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['ipIdentity.idIssuer'].error?.message }}
        </Message>
      </div>

      <div class="field full-width">
        <InputText
          name="ipIdentity.idRegAddress"
          :placeholder="$t('organization.fields.idRegAddress')"
        />
        <Message
          v-if="$form['ipIdentity.idRegAddress']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['ipIdentity.idRegAddress'].error?.message }}
        </Message>
      </div>

      <div class="field">
        <DatePicker
          name="ipIdentity.idBirthdate"
          dateFormat="yy-mm-dd"
          :placeholder="$t('organization.fields.idBirthdate')"
        />
        <Message
          v-if="$form['ipIdentity.idBirthdate']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['ipIdentity.idBirthdate'].error?.message }}
        </Message>
      </div>

      <!-- Адреса -->
      <div class="field full-width">
        <InputText name="postAddress" :placeholder="$t('organization.fields.postAddress')" />
        <Message v-if="$form.postAddress?.invalid" severity="error" size="small" variant="simple">
          {{ $form.postAddress.error?.message }}
        </Message>
      </div>

      <div class="field full-width">
        <InputText name="factAddress" :placeholder="$t('organization.fields.factAddress')" />
        <Message v-if="$form.factAddress?.invalid" severity="error" size="small" variant="simple">
          {{ $form.factAddress.error?.message }}
        </Message>
      </div>

      <!-- Контакты -->
      <div class="field">
        <InputText name="phone" :placeholder="$t('organization.fields.phone')" />
        <Message v-if="$form.phone?.invalid" severity="error" size="small" variant="simple">
          {{ $form.phone.error?.message }}
        </Message>
      </div>

      <div class="field">
        <InputText name="email" :placeholder="$t('organization.fields.email')" />
        <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">
          {{ $form.email.error?.message }}
        </Message>
      </div>

      <!-- Контакты по реквизитам -->
      <div class="field full-width">
        <InputText
          name="sendRekvContact.phone"
          :placeholder="$t('organization.fields.rekvPhone')"
        />
        <Message
          v-if="$form['sendRekvContact.phone']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['sendRekvContact.phone'].error?.message }}
        </Message>
      </div>

      <div class="field full-width">
        <InputText
          name="sendRekvContact.email"
          :placeholder="$t('organization.fields.rekvEmail')"
        />
        <Message
          v-if="$form['sendRekvContact.email']?.invalid"
          severity="error"
          size="small"
          variant="simple"
        >
          {{ $form['sendRekvContact.email'].error?.message }}
        </Message>
      </div>

      <!-- Кнопка -->
      <div class="button-actions">
        <Button :label="$t('organization.actions.send')" type="submit" size="large" />
      </div>
    </div>
  </Form>

  <Dialog
    :header="$t('applicationSent.title')"
    modal
    :visible="dialog.isOpen(Dialogs.ORGANIZATION_SENT_NOTICE)"
    @update:visible="dialog.close(Dialogs.ORGANIZATION_SENT_NOTICE)"
  >
    <OrganizationSentNotice @confirm="onConfirm" />
  </Dialog>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Form, type FormSubmitEvent } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import Button from 'primevue/button';
import DatePicker from 'primevue/datepicker';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import type { OrganizationType } from '@/api/organization/organization.types.ts';
import { Dialogs } from '@/config/dialog.ts';
import { organizationValidationSchema } from '@/model/organization/organization-validation.scheme.ts';
import { useDialogStore } from '@/store/app/dialog.store.ts';
import OrganizationSentNotice from '@/view/feature/organization/OrganizationSentNotice.vue';

const emits = defineEmits(['submit']);

const props = defineProps<{ organization: OrganizationType }>();
const resolver = ref(zodResolver(organizationValidationSchema));
const values = reactive<OrganizationType>({ ...props.organization });
const dialog = useDialogStore();

const onSubmit = ({ valid }: FormSubmitEvent) => {
  if (valid) {
    //TODO
    dialog.open(Dialogs.ORGANIZATION_SENT_NOTICE);
    console.log('Valid organization:', values);
  }
};

const onConfirm = () => {
  dialog.close(Dialogs.ORGANIZATION_SENT_NOTICE);
  emits('submit');
};
</script>
