<template>
  <div class="flex flex-column gap-3">
    <fieldset class="flex flex-wrap gap-3 w-full">
      <legend class="h2-bold pb-3">{{ $t('userForm.fieldset.main') }}</legend>

      <InputField
        v-model="loginValue"
        :error="loginError"
        :label="$t('userForm.fields.login')"
        class="flex-basics-w6-g3 w-6"
      />

      <InputField
        v-model="surnameValue"
        :error="surnameError"
        :label="$t('userForm.fields.surname')"
        class="flex-basics-w6-g3 w-6"
      />

      <InputField
        v-model="nameValue"
        :error="nameError"
        :label="$t('userForm.fields.name')"
        class="flex-basics-w6-g3 w-6"
      />

      <InputField
        v-model="patronymicValue"
        :error="patronymicError"
        :label="$t('userForm.fields.patronymic')"
        class="flex-basics-w6-g3 w-6"
      />
    </fieldset>

    <Divider />

    <fieldset class="flex flex-wrap gap-3 w-full">
      <legend class="h2-bold pb-3">{{ $t('userForm.fieldset.contacts') }}</legend>

      <InputField
        v-model="emailValue"
        :error="emailError"
        :label="$t('userForm.fields.email')"
        class="flex-basics-w6-g3 w-6"
      />

      <InputField
        v-model="phoneValue"
        :error="phoneError"
        :label="$t('userForm.fields.phone')"
        class="flex-basics-w6-g3 w-6"
      />

      <InputField
        v-model="innValue"
        :error="innError"
        :label="$t('userForm.fields.inn')"
        class="flex-basics-w6-g3 w-6"
      />
    </fieldset>

    <div class="flex gap-3 w-full">
      <Button
        :label="$t('sendDocumentWidget.actions.send')"
        :disabled="!meta.valid"
        @click="$emit('submit')"
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
import { useField, useForm } from 'vee-validate';
import type { UserType } from '@/api/user/user.types.ts';
import { profileValidationSchema } from '@/model/user/profile-validation-schema.ts';
import InputField from '@/shared/components/input-field/InputField.vue';
import SignCheckbox from '@/view/feature/sign/SignCheckbox.vue';

defineEmits(['submit']);
const props = defineProps<{ user: UserType }>();
const isSigningEnabled = ref(false);

const validationSchema = toTypedSchema(profileValidationSchema);

const { meta } = useForm({
  validationSchema,
  initialValues: {
    ...props.user,
  },
});

// Определяем поля формы с useField
const { value: loginValue, errorMessage: loginError } = useField<string>('login');
const { value: surnameValue, errorMessage: surnameError } = useField<string>('surname');
const { value: nameValue, errorMessage: nameError } = useField<string>('name');
const { value: patronymicValue, errorMessage: patronymicError } = useField<string>('patronymic');
const { value: emailValue, errorMessage: emailError } = useField<string>('email');
const { value: phoneValue, errorMessage: phoneError } = useField<string>('phone');
const { value: innValue, errorMessage: innError } = useField<string>('inn');
</script>
