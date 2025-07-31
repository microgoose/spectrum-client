// Типы для ответа  организаций
export interface OrganizationIdType {
  id: number;
  name: string;
  sdcoCode: string;
}

export interface OrganizationIpIdentityType {
  idType: OrganizationIdType;
  idNumber: string;
  idFio: string;
  idIssuer: string;
  idIssueDate: string; // ISO строка
  idBirthdate: string; // ISO строка
  idRegAddress: string;
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

export interface OrganizationType {
  id: number;
  crmOrganizationId: number;
  ipIdentity: OrganizationIpIdentityType;
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
