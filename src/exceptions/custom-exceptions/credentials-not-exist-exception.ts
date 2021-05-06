import { BadRequestException } from '@nestjs/common';

import { ExceptionsEnum } from '../../enums';

export class CredentialsNotExistException extends BadRequestException {
  constructor() {
    super({
      code: ExceptionsEnum.CREDENTIALS_NOT_EXIST,
      message: 'Please provide email and password',
    });
  }
}
