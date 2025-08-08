export interface ClaimType {
  name: string;
  description: string;
}

export interface ClaimUser {
  id: number;
  fio: string;
}

export interface RawClaimSummary {
  id: number;
  claimType: ClaimType;
  user: ClaimUser;
  status: string;
  date?: string;
}

export interface ClaimSummary extends Omit<RawClaimSummary, 'date'> {
  date?: Date;
}

export interface ClaimRequestData {
  document: string; // base64 XML
  signature: string | null; // base64 signature
}

export interface ClaimStatusResponse {
  status: number;
  message: string;
  timestamp: string;
}

export interface ClaimXmlGenerationRequest {
  claim: {
    type: string;
    ogrn: string;
    data: unknown; // структура анкеты (можно типизировать отдельно при необходимости)
  };
}

export interface ClaimXmlResponse {
  claim: string; // raw XML строка или можно использовать XMLDocument, если нужно
}

export interface FullClaim {
  type: string;
  ogrn: string;
  author: string;
  date: string;
  data: unknown; // можно типизировать при необходимости
}
