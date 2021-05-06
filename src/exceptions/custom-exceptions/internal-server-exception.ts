import { InternalServerErrorException } from '@nestjs/common';

import { ExceptionsEnum } from '../../enums';

export class InternalServerException extends InternalServerErrorException {
  constructor() {
    super({
      code: ExceptionsEnum.INTERNAL_SERVER,
      message: 'Something went wrong',
    });
  }
}
