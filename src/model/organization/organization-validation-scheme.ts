import { z } from 'zod';
import { t } from '@/config/localization.ts';

export const organizationValidationSchema = z.object({
  fullName: z
    .string({ message: t('organization.error.fullNameRequired') })
    .min(1, { message: t('organization.error.fullNameRequired') }),

  inn: z
    .string({ message: t('organization.error.innRequired') })
    .length(12, { message: t('organization.error.innInvalidLength') }),

  ogrn: z
    .string({ message: t('organization.error.ogrnRequired') })
    .length(13, { message: t('organization.error.ogrnInvalidLength') }),

  taxation: z.object({
    id: z.number({ message: t('organization.error.taxationRequired') }),
  }),

  ipIdentity: z.object({
    idType: z.object({
      name: z
        .string({ message: t('organization.error.idTypeRequired') })
        .min(1, { message: t('organization.error.idTypeRequired') }),
    }),

    idNumber: z
      .string({ message: t('organization.error.idNumberRequired') })
      .min(5, { message: t('organization.error.idNumberInvalid') }),

    idIssuer: z
      .string({ message: t('organization.error.idIssuerRequired') })
      .min(1, { message: t('organization.error.idIssuerRequired') }),

    idIssueDate: z
      .string({ message: t('organization.error.idIssueDateRequired') })
      .regex(/^\d{4}-\d{2}-\d{2}$/, { message: t('organization.error.dateFormat') }),

    idBirthdate: z
      .string({ message: t('organization.error.birthdateRequired') })
      .regex(/^\d{4}-\d{2}-\d{2}$/, { message: t('organization.error.dateFormat') }),

    idRegAddress: z
      .string({ message: t('organization.error.regAddressRequired') })
      .min(5, { message: t('organization.error.regAddressRequired') }),
  }),

  postAddress: z
    .string({ message: t('organization.error.postAddressRequired') })
    .min(5, { message: t('organization.error.postAddressRequired') }),

  factAddress: z
    .string({ message: t('organization.error.factAddressRequired') })
    .min(5, { message: t('organization.error.factAddressRequired') }),

  phone: z
    .string({ message: t('organization.error.phoneRequired') })
    .min(10, { message: t('organization.error.phoneInvalid') }),

  email: z
    .string({ message: t('organization.error.emailRequired') })
    .regex(/^[\w-.]+@[\w-]+\.[\w-.]+$/, { message: t('organization.error.emailInvalid') }),

  sendRekvContact: z.object({
    phone: z
      .string({ message: t('organization.error.rekvPhoneRequired') })
      .min(10, { message: t('organization.error.rekvPhoneInvalid') }),

    email: z
      .string({ message: t('organization.error.rekvEmailRequired') })
      .regex(/^[\w-.]+@[\w-]+\.[\w-.]+$/, { message: t('organization.error.emailInvalid') }),
  }),

  organizationContacts: z.array(
    z.object({
      fio: z
        .string({ message: t('organization.error.contactFioRequired') })
        .min(1, { message: t('organization.error.contactFioRequired') }),

      title: z
        .string({ message: t('organization.error.contactTitleRequired') })
        .min(1, { message: t('organization.error.contactTitleRequired') }),

      phone: z
        .string({ message: t('organization.error.contactPhoneRequired') })
        .min(10, { message: t('organization.error.phoneInvalid') }),

      email: z
        .string({ message: t('organization.error.contactEmailRequired') })
        .regex(/^[\w-.]+@[\w-]+\.[\w-.]+$/, { message: t('organization.error.emailInvalid') }),
    }),
  ),
});
