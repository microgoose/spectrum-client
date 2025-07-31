import { api } from '@/config/api.ts';
import type { DatabaseVersion, ServiceVersion } from '@/model/system-ifno/system-info.types.ts';

export const getServiceVersion = async () => {
  return api.get('version').json<ServiceVersion>();
};

export const getDatabaseVersion = async () => {
  return api.get('version/db').json<DatabaseVersion>();
};

export const getCurrentUserLogin = async () => {
  return api.get('info').text();
};
