import { api } from '@/config/api.ts';
import type { ApiMapResponse } from '@/model/api-map/api-map.types.ts';

export const getApiMap = async () => {
  return api.get('api-map').json<ApiMapResponse>();
};
