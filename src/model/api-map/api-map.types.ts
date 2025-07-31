export interface ApiMapResponse {
  version: string;
  login: string | null;
  roles: string[];
  apiMap: Record<string, string>;
}
