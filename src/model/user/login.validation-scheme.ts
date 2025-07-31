import { z } from 'zod';
import { t } from '@/config/localization.ts';

export const loginValidationScheme = z.object({
  user: z
    .string({ message: t('loginForm.error.usernameRequired') })
    .min(1, { message: t('login.error.usernameRequired') }),

  password: z
    .string({ message: t('loginForm.error.passwordRequired') })
    .min(1, { message: t('login.error.passwordRequired') }),
});
