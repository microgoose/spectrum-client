// Генерация XML анкеты
import { api } from '@/config/api.ts';
import type {
  ClaimRequestData,
  ClaimStatusResponse,
  ClaimSummary,
  ClaimXmlGenerationRequest,
  FullClaim,
  RawClaimSummary,
} from '@/model/claim/claim.types';
import { getJsDate } from '@/shared/lib/date-util';

export const generateClaimXml = async (payload: ClaimXmlGenerationRequest) => {
  // XML приходит в виде строки
  return api.post('claim/anketa/data', { json: payload }).text();
};

// Сохранение анкеты
export const saveClaim = async (payload: ClaimRequestData) => {
  //TODO dont work
  return api.post('claim/anketa', { json: payload }).json<ClaimStatusResponse>();
};

// Обновление анкеты по ID
export const updateClaim = async (claimId: number, payload: ClaimRequestData) => {
  //TODO dont work
  return api.patch(`claim/anketa/${claimId}`, { json: payload }).json<ClaimStatusResponse>();
};

// Получение списка заявлений
export const getClaims = async (): Promise<ClaimSummary[]> => {
  const claims = await api.get('claim').json<RawClaimSummary[]>();
  return claims.map((claim) => ({
    ...claim,
    date: claim.date ? getJsDate(claim.date) : undefined,
  }));
};

// Получение заявления по ID
export const getClaimById = async (claimId: number) => {
  return api.get(`claim/${claimId}`).json<FullClaim>();
};
