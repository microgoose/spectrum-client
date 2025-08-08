import { z } from 'zod';
import { t } from '@/config/localization.ts';

export type IpIdentityZodType = z.infer<typeof IpIdentityZodSchema>;
export type SendRekvContactZodType = z.infer<typeof SendRekvContactZodSchema>;
export type OrganizationContactZodType = z.infer<typeof OrganizationContactZodSchema>;
export type OrganizationZodType = z.infer<typeof OrganizationZodSchema>;

export const IpIdentityZodSchema = z.object({
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

  idIssueDate: z.date({ message: t('organizationForm.error.idIssueDateRequired') }),

  idBirthdate: z.date({ message: t('organizationForm.error.birthdateRequired') }),

  idRegAddress: z
    .string({ message: t('organizationForm.error.regAddressRequired') })
    .min(5, { message: t('organizationForm.error.regAddressRequired') }),
});
export const SendRekvContactZodSchema = z.object({
  phone: z
    .string({ message: t('organizationForm.error.rekvPhoneRequired') })
    .min(10, { message: t('organizationForm.error.rekvPhoneInvalid') }),

  email: z
    .string({ message: t('organizationForm.error.rekvEmailRequired') })
    .email({ message: t('organizationForm.error.emailInvalid') }),
});
export const OrganizationContactZodSchema = z.object({
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
    .email({ message: t('organizationForm.error.emailInvalid') }),
});
export const OrganizationZodSchema = z.object({
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

  ipIdentity: IpIdentityZodSchema,

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
    .email({ message: t('organizationForm.error.emailInvalid') }),

  sendRekvContact: SendRekvContactZodSchema,

  organizationContacts: z.array(OrganizationContactZodSchema),
});
