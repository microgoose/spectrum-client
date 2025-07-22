<style module lang="scss">
.loginContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
}
</style>

<template>
  <Form
    :class="$style.loginContainer"
    v-slot="$form"
    :resolver="resolver"
    :initialValues="loginStore"
    @submit="onFormSubmit"
  >
    <div>
      <InputText
        name="username"
        type="text"
        :placeholder="$t('login.placeholder.username')"
        size="large"
      />
      <Message v-if="$form.username?.invalid" severity="error" size="small" variant="simple">
        {{ $form.username.error?.message }}
      </Message>
    </div>

    <div>
      <InputText
        name="email"
        type="text"
        :placeholder="$t('login.placeholder.email')"
        size="large"
      />
      <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">
        {{ $form.email.error?.message }}
      </Message>
    </div>

    <Button :label="$t('login.action.enter')" type="submit" severity="secondary" size="large" />
  </Form>
</template>

<script setup lang="ts">
import { ref } from 'vue';

import { Form } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';

import { Routes } from '@/config/router';
import { pushPage } from '@/service/route.service';
import { useAuthStore } from '@/store/auth.store';
import { useLoginStore } from '@/store/login.store';

import { loginValidationScheme } from '../model/login-validation.scheme';

const loginStore = useLoginStore();
const resolver = ref(zodResolver(loginValidationScheme));

const onFormSubmit = () => {
  const auth = useAuthStore();
  auth.login('test-token'); // TODO: remove this
  pushPage(Routes.HOME);
};
</script>
