import { UnauthorizedException } from '@nestjs/common';

import { ExceptionsEnum } from '../../enums';

export class TokenNotFoundException extends UnauthorizedException {
  constructor() {
    super({
      code: ExceptionsEnum.TOKEN_NOT_FOUND,
      message: 'Token not found. You are not logged in',
    });
  }
}
