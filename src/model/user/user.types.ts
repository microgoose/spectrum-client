export interface UserType {
  id: number;
  login: string;
  organizationId: number;
  name: string;
  patronymic: string;
  surname: string;
  email: string;
  inn: string | null;
  phone: string;
}
