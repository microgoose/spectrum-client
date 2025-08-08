import { z } from 'zod';
import { t } from '@/config/localization.ts';

export const profileZod = z.object({
  login: z
    .string({ message: t('userForm.errors.loginRequired') })
    .min(1, { message: t('userForm.errors.loginRequired') }),

  name: z
    .string({ message: t('userForm.errors.nameRequired') })
    .min(1, { message: t('userForm.errors.nameRequired') }),

  surname: z
    .string({ message: t('userForm.errors.surnameRequired') })
    .min(1, { message: t('userForm.errors.surnameRequired') }),

  patronymic: z.string().optional().nullable(),

  email: z
    .string({ message: t('userForm.errors.emailRequired') })
    .email({ message: t('userForm.errors.emailInvalid') }),

  phone: z.string().optional().nullable(),

  inn: z.string().optional().nullable(),

  organizationId: z.number(),
});
