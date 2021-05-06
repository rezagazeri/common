import { RequestTimeoutException } from '@nestjs/common';

import { ExceptionsEnum } from '../../enums';

export class TimeoutException extends RequestTimeoutException {
  constructor() {
    super({ code: ExceptionsEnum.TIMEOUT, message: 'Request timeout' });
  }
}
