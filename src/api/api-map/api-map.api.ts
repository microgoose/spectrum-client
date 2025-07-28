import type { ApiMapResponse } from '@/api/api-map/api-map.types.ts';
import { api } from '@/config/api.ts';

export const getApiMap = async () => {
  return await api.get('spectrum-core/api-map.json').json<ApiMapResponse>();
};
