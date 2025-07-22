// Типы для ответа API организаций

export interface ApiOrganizationIdType {
  id: number;
  name: string;
  sdcoCode: string;
}

export interface ApiOrganizationIpIdentity {
  idType: ApiOrganizationIdType;
  idNumber: string;
  idFio: string;
  idIssuer: string;
  idIssueDate: string; // ISO строка
  idBirthdate: string; // ISO строка
  idRegAddress: string;
}

export interface ApiOrganizationTaxation {
  id: number;
  description: string;
}

export interface ApiOrganizationSendRekvContact {
  phone: string;
  email: string;
}

export interface ApiOrganizationContact {
  fio: string;
  title: string;
  phone: string;
  email: string;
}

export interface ApiOrganization {
  id: number;
  crmOrganizationId: number;
  ipIdentity: ApiOrganizationIpIdentity;
  taxation: ApiOrganizationTaxation;
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
  sendRekvContact: ApiOrganizationSendRekvContact;
  organizationContacts: ApiOrganizationContact[];
}

// Тип для словаря организаций, возвращаемого API
export type ApiOrganizationsDictionary = Record<string, ApiOrganization>;
