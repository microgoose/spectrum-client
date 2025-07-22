// Тип для idType
export interface OrganizationIdType {
  id: number;
  name: string;
  sdcoCode: string;
}

// Тип для ipIdentity
export interface OrganizationIpIdentity {
  idType: OrganizationIdType;
  idNumber: string;
  idFio: string;
  idIssuer: string;
  idIssueDate: string; // ISO дата
  idBirthdate: string; // ISO дата
  idRegAddress: string;
}

// Тип для taxation
export interface OrganizationTaxation {
  id: number;
  description: string;
}

// Тип для sendRekvContact
export interface OrganizationSendRekvContact {
  phone: string;
  email: string;
}

// Тип для organizationContacts
export interface OrganizationContact {
  fio: string;
  title: string;
  phone: string;
  email: string;
}

// Основной тип организации
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
