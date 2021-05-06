import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  private readonly _logger: Logger = new Logger(LoggingInterceptor.name);

  intercept(
    context: ExecutionContext,
    callHandler$: CallHandler,
  ): Observable<any> {
    const req = context.switchToHttp().getRequest<Request>();
    const res = context.switchToHttp().getResponse<Response>();
    const { method, url, body, headers } = req;
    const { statusCode } = res;
    const message = `Outgoing response - ${statusCode} - ${method} - ${url}`;
    const beforeRequestTime = Date.now();
    // ================log incoming request information ================= fire log before process
    this._logger.log({
      beforeRequestTime,
      message,
      method,
      body,
      headers,
    });

    // ================log incoming request information ================= fire log or after process

    return callHandler$.handle().pipe(
      tap({
        next: (val: unknown): void => {
          this._successLog(val, context, beforeRequestTime);
        },
      }),
    );
  }

  private _successLog(
    val: unknown,
    context: ExecutionContext,
    beforeRequestTime: number,
  ): void {
    const req = context.switchToHttp().getRequest<Request>();
    const res = context.switchToHttp().getResponse<Response>();
    const { method, url } = req;
    const { statusCode } = res;
    const responseTime = `${Date.now() - beforeRequestTime}ms`;
    const message = `Outgoing response - ${statusCode} - ${method} - ${url}`;
    this._logger.log({
      responseTime,
      message,
      val,
    });
  }
}
