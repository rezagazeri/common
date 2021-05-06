import { UnauthorizedException } from '@nestjs/common';

import { ExceptionsEnum } from '../../enums';

export class CodeExpiredException extends UnauthorizedException {
  constructor() {
    super({
      code: ExceptionsEnum.CODE_EXPIRED,
      message: 'Your provided code is expired',
    });
  }
}
