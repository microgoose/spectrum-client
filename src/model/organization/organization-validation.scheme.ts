import { z } from '@zod/mini';
import { t } from '@/config/localization.ts';

export const organizationValidationSchema = z.object({
  fullName: z
    .string(t('organization.error.fullNameRequired'))
    .check(z.minLength(1, { message: t('organization.error.fullNameRequired') })),

  inn: z
    .string(t('organization.error.innRequired'))
    .check(z.length(12, { message: t('organization.error.innInvalidLength') })),

  ogrn: z
    .string(t('organization.error.ogrnRequired'))
    .check(z.length(13, { message: t('organization.error.ogrnInvalidLength') })),

  taxation: z.object({
    description: z
      .string(t('organization.error.taxationRequired'))
      .check(z.minLength(1, { message: t('organization.error.taxationRequired') })),
  }),

  ipIdentity: z.object({
    idType: z.object({
      name: z
        .string(t('organization.error.idTypeRequired'))
        .check(z.minLength(1, { message: t('organization.error.idTypeRequired') })),
    }),

    idNumber: z
      .string(t('organization.error.idNumberRequired'))
      .check(z.minLength(5, { message: t('organization.error.idNumberInvalid') })),

    idIssuer: z
      .string(t('organization.error.idIssuerRequired'))
      .check(z.minLength(1, { message: t('organization.error.idIssuerRequired') })),

    idIssueDate: z
      .string(t('organization.error.idIssueDateRequired'))
      .check(z.regex(/^\d{4}-\d{2}-\d{2}$/, { message: t('organization.error.dateFormat') })),

    idBirthdate: z
      .string(t('organization.error.birthdateRequired'))
      .check(z.regex(/^\d{4}-\d{2}-\d{2}$/, { message: t('organization.error.dateFormat') })),

    idRegAddress: z
      .string(t('organization.error.regAddressRequired'))
      .check(z.minLength(5, { message: t('organization.error.regAddressRequired') })),
  }),

  postAddress: z
    .string(t('organization.error.postAddressRequired'))
    .check(z.minLength(5, { message: t('organization.error.postAddressRequired') })),

  factAddress: z
    .string(t('organization.error.factAddressRequired'))
    .check(z.minLength(5, { message: t('organization.error.factAddressRequired') })),

  phone: z
    .string(t('organization.error.phoneRequired'))
    .check(z.minLength(10, { message: t('organization.error.phoneInvalid') })),

  email: z
    .string(t('organization.error.emailRequired'))
    .check(z.regex(/^[\w-.]+@[\w-]+\.[\w-.]+$/, { message: t('organization.error.emailInvalid') })),

  sendRekvContact: z.object({
    phone: z
      .string(t('organization.error.rekvPhoneRequired'))
      .check(z.minLength(10, { message: t('organization.error.rekvPhoneInvalid') })),

    email: z
      .string(t('organization.error.rekvEmailRequired'))
      .check(
        z.regex(/^[\w-.]+@[\w-]+\.[\w-.]+$/, { message: t('organization.error.emailInvalid') }),
      ),
  }),

  organizationContacts: z.array(
    z.object({
      fio: z
        .string(t('organization.error.contactFioRequired'))
        .check(z.minLength(1, { message: t('organization.error.contactFioRequired') })),

      title: z
        .string(t('organization.error.contactTitleRequired'))
        .check(z.minLength(1, { message: t('organization.error.contactTitleRequired') })),

      phone: z
        .string(t('organization.error.contactPhoneRequired'))
        .check(z.minLength(10, { message: t('organization.error.phoneInvalid') })),

      email: z
        .string(t('organization.error.contactEmailRequired'))
        .check(
          z.regex(/^[\w-.]+@[\w-]+\.[\w-.]+$/, { message: t('organization.error.emailInvalid') }),
        ),
    }),
  ),
});
