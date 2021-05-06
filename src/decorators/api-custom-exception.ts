import {
  buildPlaceholder,
  buildTemplatedApiExceptionDecorator,
} from '@nanogiants/nestjs-swagger-api-exception-decorator';
import { HttpException } from '@nestjs/common';

import { IErrorResponse } from '../interfaces';

// eslint-disable-next-line @typescript-eslint/naming-convention
export const ApiCustomException = buildTemplatedApiExceptionDecorator(
  {
    code: '$code',
    message: '$description',
  },
  {
    placeholders: {
      code: buildPlaceholder(
        () => HttpException,
        exception => (exception.getResponse() as IErrorResponse).code,
      ),
    },
  },
);
