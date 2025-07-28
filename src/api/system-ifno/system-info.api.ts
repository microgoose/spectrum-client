import type { DatabaseVersion, ServiceVersion } from '@/api/system-ifno/system-info.types.ts';
import { api } from '@/config/api.ts';

export const getServiceVersion = async () => {
  return await api.get('spectrum-core/version.json').json<ServiceVersion>();
};

export const getDatabaseVersion = async () => {
  return await api.get('spectrum-core/version/db.json').json<DatabaseVersion>();
};

export const getCurrentUserLogin = async () => {
  return await api.get('spectrum-core/info.json').text();
};
