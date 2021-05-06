import { BadRequestException } from '@nestjs/common';

import { ExceptionsEnum } from '../../enums';

export class DatabaseQueryFailedException extends BadRequestException {
  constructor() {
    super({
      code: ExceptionsEnum.DATABASE_QUERY_FAILED,
      message: 'Database query failed',
    });
  }
}
