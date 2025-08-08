export interface OrganizationIdType {
  id: number;
  name: string;
  sdcoCode: string;
}

//Ответ API
export interface RawOrganizationIpIdentityType {
  idType: OrganizationIdType;
  idNumber: string;
  idFio: string;
  idIssuer: string;
  idIssueDate: string; // Приходит как строка
  idBirthdate: string; // Приходит как строка
  idRegAddress: string;
}

//Так как полей немного, просто берём существущий тип и перезаписываем часть его свойств
export interface OrganizationIpIdentityType
  extends Omit<RawOrganizationIpIdentityType, 'idIssueDate' | 'idBirthdate'> {
  idIssueDate: Date;
  idBirthdate: Date;
}

export interface OrganizationTaxationType {
  id: number;
  description: string;
}

export interface OrganizationSendRekvContactType {
  phone: string;
  email: string;
}

export interface OrganizationContactType {
  fio: string;
  title: string;
  phone: string;
  email: string;
}

export interface RawOrganizationType {
  id: number;
  crmOrganizationId: number;
  ipIdentity?: RawOrganizationIpIdentityType;
  taxation: OrganizationTaxationType;
  shortName: string;
  fullName: string;
  inn: string;
  ogrn: string;
  kpp: string;
  phone: string;
  email: string;
  postAddress: string;
  address: string | null;
  factAddress: string;
  sendRekvContact: OrganizationSendRekvContactType;
  organizationContacts: OrganizationContactType[];
}

export interface OrganizationType extends Omit<RawOrganizationType, 'ipIdentity'> {
  ipIdentity?: OrganizationIpIdentityType;
}
