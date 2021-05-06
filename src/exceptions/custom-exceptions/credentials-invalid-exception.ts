import { BadRequestException } from '@nestjs/common';

import { ExceptionsEnum } from '../../enums';

export class CredentialsInvalidException extends BadRequestException {
  constructor() {
    super({
      code: ExceptionsEnum.CREDENTIALS_INVALID,
      message: 'Incorrect credentials',
    });
  }
}
