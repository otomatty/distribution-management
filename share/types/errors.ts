// エラーコードの列挙型
export enum ErrorCode {
  // 認証関連のエラー
  UNAUTHORIZED = "UNAUTHORIZED",
  INVALID_CREDENTIALS = "INVALID_CREDENTIALS",
  TOKEN_EXPIRED = "TOKEN_EXPIRED",

  // リソース関連のエラー
  NOT_FOUND = "NOT_FOUND",
  ALREADY_EXISTS = "ALREADY_EXISTS",
  CONFLICT = "CONFLICT",

  // 入力検証関連のエラー
  VALIDATION_ERROR = "VALIDATION_ERROR",
  INVALID_INPUT = "INVALID_INPUT",

  // 権限関連のエラー
  FORBIDDEN = "FORBIDDEN",
  INSUFFICIENT_PERMISSIONS = "INSUFFICIENT_PERMISSIONS",

  // データベース関連のエラー
  DATABASE_ERROR = "DATABASE_ERROR",

  // 外部サービス関連のエラー
  EXTERNAL_SERVICE_ERROR = "EXTERNAL_SERVICE_ERROR",

  // ファイル操作関連のエラー
  FILE_UPLOAD_ERROR = "FILE_UPLOAD_ERROR",
  FILE_NOT_FOUND = "FILE_NOT_FOUND",

  // レート制限関連のエラー
  RATE_LIMIT_EXCEEDED = "RATE_LIMIT_EXCEEDED",

  // その他のエラー
  INTERNAL_SERVER_ERROR = "INTERNAL_SERVER_ERROR",
  NOT_IMPLEMENTED = "NOT_IMPLEMENTED",
}

// カスタムエラークラス
export class AppError extends Error {
  constructor(
    public code: ErrorCode,
    message: string,
    public statusCode: number = 500,
    public details?: any
  ) {
    super(message);
    this.name = "AppError";

    // Errorクラスを正しく拡張するためのハック（TypeScriptの制限による）
    Object.setPrototypeOf(this, AppError.prototype);
  }

  toJSON() {
    return {
      error: {
        code: this.code,
        message: this.message,
        details: this.details,
      },
    };
  }
}

// 特定のエラー用のサブクラス
export class ValidationError extends AppError {
  constructor(message: string, details?: any) {
    super(ErrorCode.VALIDATION_ERROR, message, 400, details);
    this.name = "ValidationError";
  }
}

export class NotFoundError extends AppError {
  constructor(message: string) {
    super(ErrorCode.NOT_FOUND, message, 404);
    this.name = "NotFoundError";
  }
}

export class UnauthorizedError extends AppError {
  constructor(message: string = "Unauthorized") {
    super(ErrorCode.UNAUTHORIZED, message, 401);
    this.name = "UnauthorizedError";
  }
}

export class ForbiddenError extends AppError {
  constructor(message: string = "Forbidden") {
    super(ErrorCode.FORBIDDEN, message, 403);
    this.name = "ForbiddenError";
  }
}

// エラーファクトリ関数
export function createError(
  code: ErrorCode,
  message: string,
  statusCode?: number,
  details?: any
): AppError {
  return new AppError(code, message, statusCode, details);
}

// エラーハンドリング用のユーティリティ関数
export function isAppError(error: any): error is AppError {
  return error instanceof AppError;
}

export function getErrorResponse(error: any) {
  if (isAppError(error)) {
    return {
      statusCode: error.statusCode,
      body: error.toJSON(),
    };
  } else {
    // 未知のエラーの場合は、一般的な内部サーバーエラーとして扱う
    const internalError = new AppError(
      ErrorCode.INTERNAL_SERVER_ERROR,
      "An unexpected error occurred"
    );
    return {
      statusCode: internalError.statusCode,
      body: internalError.toJSON(),
    };
  }
}
