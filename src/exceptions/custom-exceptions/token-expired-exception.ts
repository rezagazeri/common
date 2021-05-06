import { UnauthorizedException } from '@nestjs/common';

import { ExceptionsEnum } from '../../enums';

export class TokenExpiredException extends UnauthorizedException {
  constructor() {
    super({
      code: ExceptionsEnum.TOKEN_EXPIRED,
      message: 'Your token is expired',
    });
  }
}
