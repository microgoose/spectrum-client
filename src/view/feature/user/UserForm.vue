<template>
  <Form :initialValues="values" :resolver="resolver" @submit="onSubmit" v-slot="$form">
    <FormGridView>
      <IftaLabel class="field">
        <InputText id="login" name="login" />
        <label for="login">{{ $t('userForm.fields.login') }}</label>
        <Message v-if="$form.login?.invalid" severity="error" size="small" variant="simple">
          {{ $form.login.error?.message }}
        </Message>
      </IftaLabel>

      <IftaLabel class="field">
        <InputText id="surname" name="surname" />
        <label for="surname">{{ $t('userForm.fields.surname') }}</label>
        <Message v-if="$form.surname?.invalid" severity="error" size="small" variant="simple">
          {{ $form.surname.error?.message }}
        </Message>
      </IftaLabel>

      <IftaLabel class="field">
        <InputText id="name" name="name" />
        <label for="name">{{ $t('userForm.fields.name') }}</label>
        <Message v-if="$form.name?.invalid" severity="error" size="small" variant="simple">
          {{ $form.name.error?.message }}
        </Message>
      </IftaLabel>

      <IftaLabel class="field">
        <InputText id="patronymic" name="patronymic" />
        <label for="patronymic">{{ $t('userForm.fields.patronymic') }}</label>
      </IftaLabel>

      <IftaLabel class="field">
        <InputText id="email" name="email" />
        <label for="email">{{ $t('userForm.fields.email') }}</label>
        <Message v-if="$form.email?.invalid" severity="error" size="small" variant="simple">
          {{ $form.email.error?.message }}
        </Message>
      </IftaLabel>

      <IftaLabel class="field">
        <InputText id="phone" name="phone" />
        <label for="phone">{{ $t('userForm.fields.phone') }}</label>
      </IftaLabel>

      <IftaLabel class="field">
        <InputText id="inn" name="inn" />
        <label for="inn">{{ $t('userForm.fields.inn') }}</label>
      </IftaLabel>

      <div class="form-actions">
        <Button :label="$t('userForm.actions.save')" type="submit" size="large" />
      </div>
    </FormGridView>
  </Form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { Form, type FormSubmitEvent } from '@primevue/forms';
import { zodResolver } from '@primevue/forms/resolvers/zod';
import Button from 'primevue/button';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import type { UserType } from '@/api/user/user.types.ts';
import { userValidationSchema } from '@/model/user/user-validation.schema.ts';
import FormGridView from '@/shared/components/form/FormGridView.vue';

const props = defineProps<{ user: UserType }>();
const resolver = ref(zodResolver(userValidationSchema));
const values = reactive<UserType>({ ...props.user });

const onSubmit = ({ valid }: FormSubmitEvent) => {
  if (valid) {
    console.log('Submitted user:', values);
    //TODO
  }
};
</script>
