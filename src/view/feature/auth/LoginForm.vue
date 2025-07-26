<template>
  <form class="flex align-items-center flex-column gap-4 pb-3" @submit.prevent="onSubmit">
    <IftaLabel class="flex flex-column gap-2 w-20rem">
      <InputText
        id="username"
        name="username"
        type="text"
        :invalid="!!errors.username"
        v-model="username"
      />
      <label for="username">{{ $t('login.placeholder.username') }}</label>
      <Message v-if="errors.username" severity="error" size="small" variant="simple">
        {{ errors.username }}
      </Message>
    </IftaLabel>

    <IftaLabel class="flex flex-column gap-2 w-20rem">
      <InputText
        id="password"
        name="password"
        type="password"
        :invalid="!!errors.password"
        v-model="password"
      />
      <label for="password">{{ $t('login.placeholder.password') }}</label>
      <Message v-if="errors.password" severity="error" size="small" variant="simple">
        {{ errors.password }}
      </Message>
    </IftaLabel>

    <Button
      :disabled="!meta.valid"
      :label="$t('login.action.enter')"
      class="w-full"
      type="submit"
      severity="secondary"
      size="large"
    />
  </form>
</template>

<script setup lang="ts">
import { toTypedSchema } from '@vee-validate/zod';
import Button from 'primevue/button';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import { useForm } from 'vee-validate';
import { loginValidationScheme } from '@/model/user/login-validation-scheme.ts';
import { login } from '@/service/auth/login.service.ts';

const { meta, errors, defineField, handleSubmit } = useForm({
  validationSchema: toTypedSchema(loginValidationScheme),
});

const [username] = defineField('username');
const [password] = defineField('password');

const onSubmit = handleSubmit((data) => {
  if (meta.value.valid) {
    login();
  }

  console.log('✅ Submitted data:', data);
});
</script>
