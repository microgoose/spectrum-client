import { z } from 'zod';
import { t } from '@/config/localization.ts';

export const loginZod = z.object({
  username: z
    .string({ message: t('loginForm.error.usernameRequired') })
    .min(1, { message: t('loginForm.error.usernameRequired') }),

  password: z
    .string({ message: t('loginForm.error.passwordRequired') })
    .min(1, { message: t('loginForm.error.passwordRequired') }),
});
