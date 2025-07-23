// Типы для ответа  организаций
export interface OrganizationIdType {
  id: number;
  name: string;
  sdcoCode: string;
}

export interface OrganizationIpIdentity {
  idType: OrganizationIdType;
  idNumber: string;
  idFio: string;
  idIssuer: string;
  idIssueDate: string; // ISO строка
  idBirthdate: string; // ISO строка
  idRegAddress: string;
}

export interface OrganizationTaxation {
  id: number;
  description: string;
}

export interface OrganizationSendRekvContact {
  phone: string;
  email: string;
}

export interface OrganizationContact {
  fio: string;
  title: string;
  phone: string;
  email: string;
}

export interface Organization {
  id: number;
  crmOrganizationId: number;
  ipIdentity: OrganizationIpIdentity;
  taxation: OrganizationTaxation;
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
  sendRekvContact: OrganizationSendRekvContact;
  organizationContacts: OrganizationContact[];
}
