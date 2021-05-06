import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
  Logger,
} from '@nestjs/common';

import { IErrorResponse } from '../interfaces';
import { convertToIranTime } from './../helper';

/**
 * create custom exception filter.
 * @remarks
 * This method is part of the {ExceptionFilter}.
 *  @returns {IErrorResponse}
 */
@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  private readonly _logger: Logger = new Logger(HttpExceptionFilter.name);

  catch(exception: HttpException, host: ArgumentsHost): Error {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse();
    const request = ctx.getRequest();
    const status = exception.getStatus
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const currentTime = new Date().toLocaleDateString();

    const errorResponse: IErrorResponse = {
      code: status,
      timestamp: convertToIranTime(currentTime),
      path: request.url,
      method: request.method,
      message:
        status !== HttpStatus.INTERNAL_SERVER_ERROR ||
        process.env.DEV_MODE === 'true'
          ? exception.message || null
          : 'Internal Server Error',
    };
    this._logger.error(errorResponse, 'errorResponse');
    return response.status(status).json(errorResponse);
  }
}
