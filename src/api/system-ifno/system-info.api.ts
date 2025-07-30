import type { DatabaseVersion, ServiceVersion } from '@/api/system-ifno/system-info.types.ts';
import { api } from '@/config/api.ts';

export const getServiceVersion = async () => {
  return api.get('version').json<ServiceVersion>();
};

export const getDatabaseVersion = async () => {
  return api.get('version/db').json<DatabaseVersion>();
};

export const getCurrentUserLogin = async () => {
  return api.get('info').text();
};
