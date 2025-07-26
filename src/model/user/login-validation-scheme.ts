import { z } from 'zod';
import { t } from '@/config/localization.ts';

export const loginValidationScheme = z.object({
  username: z
    .string({ message: t('login.error.usernameRequired') })
    .min(1, { message: t('login.error.usernameRequired') }),

  password: z
    .string({ message: t('login.error.passwordRequired') })
    .min(1, { message: t('login.error.passwordRequired') }),
});
