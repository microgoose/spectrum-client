import { HTTPError } from 'ky';
import { t } from '@/config/localization';

export function toError(err: unknown): Error {
  if (err instanceof Error) {
    return err;
  } else if (err) {
    return new Error(String(err));
  } else {
    return new Error(t('errors.unkownError'));
  }
}

export function getHTTPErrorCode(err: unknown): number {
  if (err instanceof HTTPError) {
    return err.response.status;
  } else {
    return -1;
  }
}
