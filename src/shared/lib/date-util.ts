import { t } from "@/config/localization";
import { DateTime } from "luxon";

// Регулярное выражение для проверки ISO 8601 формата
const ISO_8601_REGEX = /^\d{4}-\d{2}-\d{2}(T\d{2}:\d{2}:\d{2}(\.\d+)?(Z|[+-]\d{2}:\d{2})?)?$/;

export const formatDate = (date: Date | string) => {
  return DateTime.fromJSDate(getJsDate(date)).toFormat(t('app.dateFormat'));
};

export const formatDateTime = (date: Date) => {
  return DateTime.fromJSDate(getJsDate(date)).toFormat(t('app.dateTimeFormat'));
};

export const getJsDate = (date: unknown): Date => {
  if (date instanceof Date) {
    return date;
  }

  if (typeof date === 'string') {
    // Проверка ISO 8601 формата
    if (ISO_8601_REGEX.test(date)) {
      const parsedDate = new Date(date);
      if (!isNaN(parsedDate.getTime())) {
        return parsedDate;
      }
    }

    // Попытка парсинга других форматов через Luxon
    const luxonDate = DateTime.fromISO(date);
    if (luxonDate.isValid) {
      return luxonDate.toJSDate();
    }
  }

  throw new Error(t('errors.unknownDateValue', { value: String(date) }));
};
