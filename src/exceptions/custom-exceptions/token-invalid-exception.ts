import { UnauthorizedException } from '@nestjs/common';

import { ExceptionsEnum } from '../../enums';

export class TokenInvalidException extends UnauthorizedException {
  constructor() {
    super({
      code: ExceptionsEnum.TOKEN_INVALID,
      message: 'Your token is invalid',
    });
  }
}
