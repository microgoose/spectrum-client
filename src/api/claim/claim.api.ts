// Генерация XML анкеты
import type {
  ClaimRequestData,
  ClaimStatusResponse,
  ClaimSummary,
  ClaimXmlGenerationRequest,
  FullClaim,
} from '@/api/claim/claim.types.ts';
import { api } from '@/config/api.ts';

export const generateClaimXml = async (payload: ClaimXmlGenerationRequest) => {
  // XML приходит в виде строки
  return await api.post('spectrum-core/claim/anketa/data', { json: payload }).text();
};

// Сохранение анкеты
export const saveClaim = async (payload: ClaimRequestData) => {
  //TODO dont work
  return await api
    .post('spectrum-core/claim/anketa', { json: payload })
    .json<ClaimStatusResponse>();
};

// Обновление анкеты по ID
export const updateClaim = async (claimId: number, payload: ClaimRequestData) => {
  //TODO dont work
  return await api
    .patch(`spectrum-core/claim/anketa/${claimId}`, { json: payload })
    .json<ClaimStatusResponse>();
};

// Получение списка заявлений
export const getClaims = async () => {
  return await api.get('spectrum-core/claim.json').json<ClaimSummary[]>();
};

// Получение заявления по ID
export const getClaimById = async (claimId: number) => {
  return await api.get(`spectrum-core/claim/${claimId}.json`).json<FullClaim>();
};
