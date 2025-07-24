import { z } from '@zod/mini';
import { t } from '@/config/localization.ts';

export const userValidationSchema = z.object({
  login: z
    .string(t('userForm.errors.loginRequired'))
    .check(z.minLength(1, { message: t('userForm.errors.loginRequired') })),
  name: z
    .string(t('userForm.errors.nameRequired'))
    .check(z.minLength(1, { message: t('userForm.errors.nameRequired') })),
  surname: z
    .string(t('userForm.errors.surnameRequired'))
    .check(z.minLength(1, { message: t('userForm.errors.surnameRequired') })),
  patronymic: z.nullable(z.optional(z.string())),
  email: z
    .string(t('userForm.errors.emailRequired'))
    .check(z.regex(/^[\w-.]+@[\w-]+\.[\w-.]+$/, { message: t('userForm.errors.emailInvalid') })),
  phone: z.nullable(z.optional(z.string())),
  inn: z.nullable(z.optional(z.string())),
  organizationId: z.number(),
});
