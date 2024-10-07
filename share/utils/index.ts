import { format, parseISO } from "date-fns";
import { ja } from "date-fns/locale";
import { DATE_FORMAT, TIME_FORMAT, DATETIME_FORMAT } from "../constants";

// 日付フォーマット関連の関数
export const formatDate = (date: Date | string): string => {
  const parsedDate = typeof date === "string" ? parseISO(date) : date;
  return format(parsedDate, DATE_FORMAT, { locale: ja });
};

export const formatTime = (date: Date | string): string => {
  const parsedDate = typeof date === "string" ? parseISO(date) : date;
  return format(parsedDate, TIME_FORMAT, { locale: ja });
};

export const formatDateTime = (date: Date | string): string => {
  const parsedDate = typeof date === "string" ? parseISO(date) : date;
  return format(parsedDate, DATETIME_FORMAT, { locale: ja });
};

// 文字列操作関連の関数
export const capitalize = (str: string): string => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

export const truncate = (str: string, length: number): string => {
  return str.length > length ? str.slice(0, length) + "..." : str;
};

// 配列操作関連の関数
export const chunk = <T>(array: T[], size: number): T[][] => {
  return Array.from({ length: Math.ceil(array.length / size) }, (_, index) =>
    array.slice(index * size, index * size + size)
  );
};

export const uniqueBy = <T>(array: T[], key: keyof T): T[] => {
  return Array.from(new Map(array.map((item) => [item[key], item])).values());
};

// オブジェクト操作関連の関数
export const omit = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Omit<T, K> => {
  const result = { ...obj };
  keys.forEach((key) => delete result[key]);
  return result;
};

export const pick = <T extends object, K extends keyof T>(
  obj: T,
  keys: K[]
): Pick<T, K> => {
  const result = {} as Pick<T, K>;
  keys.forEach((key) => {
    if (key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
};

// バリデーション関連の関数
export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const isValidUrl = (url: string): boolean => {
  try {
    new URL(url);
    return true;
  } catch {
    return false;
  }
};

// 数値操作関連の関数
export const clamp = (num: number, min: number, max: number): number => {
  return Math.min(Math.max(num, min), max);
};

export const randomInteger = (min: number, max: number): number => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

// 色操作関連の関数
export const hexToRgb = (
  hex: string
): { r: number; g: number; b: number } | null => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

// ディープコピー関数
export const deepCopy = <T>(obj: T): T => {
  return JSON.parse(JSON.stringify(obj));
};

// デバウンス関数
export const debounce = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number
) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<F>): void => {
    if (timeout !== null) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => func(...args), waitFor);
  };
};

// スロットル関数
export const throttle = <F extends (...args: any[]) => any>(
  func: F,
  waitFor: number
) => {
  let timeout: ReturnType<typeof setTimeout> | null = null;
  let lastExec = 0;

  return function (this: any, ...args: Parameters<F>) {
    const context = this;
    const now = Date.now();

    if (now - lastExec >= waitFor) {
      func.apply(context, args);
      lastExec = now;
    } else {
      if (timeout !== null) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        func.apply(context, args);
        lastExec = now;
      }, waitFor - (now - lastExec));
    }
  };
};

// ローカルストレージ操作関数
export const storage = {
  set: <T>(key: string, value: T): void => {
    localStorage.setItem(key, JSON.stringify(value));
  },
  get: <T>(key: string, defaultValue: T): T => {
    const value = localStorage.getItem(key);
    return value ? JSON.parse(value) : defaultValue;
  },
  remove: (key: string): void => {
    localStorage.removeItem(key);
  },
  clear: (): void => {
    localStorage.clear();
  },
};

// クエリパラメータ操作関数
export const queryParams = {
  parse: (queryString: string): Record<string, string> => {
    return Object.fromEntries(new URLSearchParams(queryString));
  },
  stringify: (params: Record<string, string>): string => {
    return new URLSearchParams(params).toString();
  },
};

// エラーハンドリング関数
export const handleError = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  return String(error);
};
