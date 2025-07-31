import { z } from 'zod';
import { t } from '@/config/localization.ts';

export const organizationValidationSchema = z.object({
  fullName: z
    .string({ message: t('organizationForm.error.fullNameRequired') })
    .min(1, { message: t('organizationForm.error.fullNameRequired') }),

  inn: z
    .string({ message: t('organizationForm.error.innRequired') })
    .length(12, { message: t('organizationForm.error.innInvalidLength') }),

  ogrn: z
    .string({ message: t('organizationForm.error.ogrnRequired') })
    .length(13, { message: t('organizationForm.error.ogrnInvalidLength') }),

  taxation: z.object({
    id: z.number({ message: t('organizationForm.error.taxationRequired') }),
  }),

  ipIdentity: z.object({
    idType: z.object({
      name: z
        .string({ message: t('organizationForm.error.idTypeRequired') })
        .min(1, { message: t('organizationForm.error.idTypeRequired') }),
    }),

    idNumber: z
      .string({ message: t('organizationForm.error.idNumberRequired') })
      .min(5, { message: t('organizationForm.error.idNumberInvalid') }),

    idIssuer: z
      .string({ message: t('organizationForm.error.idIssuerRequired') })
      .min(1, { message: t('organizationForm.error.idIssuerRequired') }),

    idIssueDate: z
      .string({ message: t('organizationForm.error.idIssueDateRequired') })
      .regex(/^\d{4}-\d{2}-\d{2}$/, { message: t('organizationForm.error.dateFormat') }),

    idBirthdate: z
      .string({ message: t('organizationForm.error.birthdateRequired') })
      .regex(/^\d{4}-\d{2}-\d{2}$/, { message: t('organizationForm.error.dateFormat') }),

    idRegAddress: z
      .string({ message: t('organizationForm.error.regAddressRequired') })
      .min(5, { message: t('organizationForm.error.regAddressRequired') }),
  }),

  postAddress: z
    .string({ message: t('organizationForm.error.postAddressRequired') })
    .min(5, { message: t('organizationForm.error.postAddressRequired') }),

  factAddress: z
    .string({ message: t('organizationForm.error.factAddressRequired') })
    .min(5, { message: t('organizationForm.error.factAddressRequired') }),

  phone: z
    .string({ message: t('organizationForm.error.phoneRequired') })
    .min(10, { message: t('organizationForm.error.phoneInvalid') }),

  email: z
    .string({ message: t('organizationForm.error.emailRequired') })
    .regex(/^[\w-.]+@[\w-]+\.[\w-.]+$/, { message: t('organizationForm.error.emailInvalid') }),

  sendRekvContact: z.object({
    phone: z
      .string({ message: t('organizationForm.error.rekvPhoneRequired') })
      .min(10, { message: t('organizationForm.error.rekvPhoneInvalid') }),

    email: z
      .string({ message: t('organizationForm.error.rekvEmailRequired') })
      .regex(/^[\w-.]+@[\w-]+\.[\w-.]+$/, { message: t('organizationForm.error.emailInvalid') }),
  }),

  organizationContacts: z.array(
    z.object({
      fio: z
        .string({ message: t('organizationForm.error.contactFioRequired') })
        .min(1, { message: t('organizationForm.error.contactFioRequired') }),

      title: z
        .string({ message: t('organizationForm.error.contactTitleRequired') })
        .min(1, { message: t('organizationForm.error.contactTitleRequired') }),

      phone: z
        .string({ message: t('organizationForm.error.contactPhoneRequired') })
        .min(10, { message: t('organizationForm.error.phoneInvalid') }),

      email: z
        .string({ message: t('organizationForm.error.contactEmailRequired') })
        .regex(/^[\w-.]+@[\w-]+\.[\w-.]+$/, { message: t('organizationForm.error.emailInvalid') }),
    }),
  ),
});
