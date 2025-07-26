<style module lang="scss">
.loginContainer {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;
}
</style>

<template>
  <Form
    :class="$style.loginContainer"
    v-slot="$form"
    :resolver="resolver"
    :initialValues="values"
    @submit="onSubmit"
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
        name="password"
        type="password"
        :placeholder="$t('login.placeholder.password')"
        size="large"
      />
      <Message v-if="$form.password?.invalid" severity="error" size="small" variant="simple">
        {{ $form.password.error?.message }}
      </Message>
    </div>

    <Button :label="$t('login.action.enter')" type="submit" severity="secondary" size="large" />
  </Form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Form, type FormSubmitEvent } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import Button from 'primevue/button';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import { loginValidationScheme } from '@/model/user/login-validation.scheme.ts';
import { login } from '@/service/auth/login.service.ts';

interface LoginFormValues {
  login: string | null;
  password: string | null;
}

const resolver = ref(zodResolver(loginValidationScheme));
const values = reactive<LoginFormValues>({
  login: null,
  password: null,
});

const onSubmit = ({ valid }: FormSubmitEvent) => {
  if (valid) {
    login();
  }
};
</script>
