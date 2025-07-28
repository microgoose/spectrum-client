<template>
  <form class="flex flex-column gap-3" @submit.prevent>
    <fieldset class="flex flex-wrap gap-3 w-full">
      <legend class="h2-bold pb-3">{{ $t('userForm.fieldset.main') }}</legend>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText
          id="login"
          :invalid="!!errors.login"
          :model-value="values.login"
          @update:model-value="(value) => setFieldValue('login', value)"
        />
        <label for="login">{{ $t('userForm.fields.login') }}</label>
        <Message v-if="errors.login" severity="error" size="small" variant="simple">
          {{ errors.login }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText
          id="surname"
          :invalid="!!errors.surname"
          :model-value="values.surname"
          @update:model-value="(value) => setFieldValue('surname', value)"
        />
        <label for="surname">{{ $t('userForm.fields.surname') }}</label>
        <Message v-if="errors.surname" severity="error" size="small" variant="simple">
          {{ errors.surname }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText
          id="name"
          :invalid="!!errors.name"
          :model-value="values.name"
          @update:model-value="(value) => setFieldValue('name', value)"
        />
        <label for="name">{{ $t('userForm.fields.name') }}</label>
        <Message v-if="errors.name" severity="error" size="small" variant="simple">
          {{ errors.name }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText
          id="patronymic"
          :invalid="!!errors.patronymic"
          :model-value="values.patronymic"
          @update:model-value="(value) => setFieldValue('patronymic', value)"
        />
        <label for="patronymic">{{ $t('userForm.fields.patronymic') }}</label>
        <Message v-if="errors.patronymic" severity="error" size="small" variant="simple">
          {{ errors.patronymic }}
        </Message>
      </IftaLabel>
    </fieldset>

    <Divider />

    <fieldset class="flex flex-wrap gap-3 w-full">
      <legend class="h2-bold pb-3">{{ $t('userForm.fieldset.contacts') }}</legend>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText
          id="email"
          :invalid="!!errors.email"
          :model-value="values.email"
          @update:model-value="(value) => setFieldValue('email', value)"
        />
        <label for="email">{{ $t('userForm.fields.email') }}</label>
        <Message v-if="errors.email" severity="error" size="small" variant="simple">
          {{ errors.email }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText
          id="phone"
          :invalid="!!errors.phone"
          :model-value="values.phone"
          @update:model-value="(value) => setFieldValue('phone', value)"
        />
        <label for="phone">{{ $t('userForm.fields.phone') }}</label>
        <Message v-if="errors.phone" severity="error" size="small" variant="simple">
          {{ errors.phone }}
        </Message>
      </IftaLabel>

      <IftaLabel class="flex flex-column gap-2 flex-basics-w6-g3 w-6">
        <InputText
          id="inn"
          :invalid="!!errors.inn"
          :model-value="values.inn"
          @update:model-value="(value) => setFieldValue('inn', value)"
        />
        <label for="inn">{{ $t('userForm.fields.inn') }}</label>
        <Message v-if="errors.inn" severity="error" size="small" variant="simple">
          {{ errors.inn }}
        </Message>
      </IftaLabel>
    </fieldset>

    <div class="flex gap-3 w-full">
      <Button
        :label="$t('sendDocumentWidget.actions.send')"
        type="submit"
        :disabled="!meta.valid"
      />
      <SignCheckbox v-model="isSigningEnabled" />
    </div>
  </form>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { toTypedSchema } from '@vee-validate/zod';
import Button from 'primevue/button';
import Divider from 'primevue/divider';
import IftaLabel from 'primevue/iftalabel';
import InputText from 'primevue/inputtext';
import Message from 'primevue/message';
import { useForm } from 'vee-validate';
import type { UserType } from '@/api/user/user.types.ts';
import { profileValidationSchema } from '@/model/user/profile-validation-schema.ts';
import SignCheckbox from '@/view/feature/sign/SignCheckbox.vue';

const props = defineProps<{ user: UserType }>();
const isSigningEnabled = ref(false);
const { meta, values, errors, setFieldValue } = useForm({
  validationSchema: toTypedSchema(profileValidationSchema),
  initialValues: {
    ...props.user,
  },
});
</script>
