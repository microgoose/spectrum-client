import { z } from '@zod/mini';
import { t } from '@/config/localization.ts';

export const loginValidationScheme = z.object({
  username: z
    .string(t('login.error.usernameRequired'))
    .check(z.minLength(1, { message: t('login.error.usernameRequired') })),

  password: z
    .string(t('login.error.passwordRequired'))
    .check(z.minLength(1, { message: t('login.error.passwordRequired') })),
});
