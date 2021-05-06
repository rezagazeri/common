import { UnauthorizedException } from '@nestjs/common';

import { ExceptionsEnum } from '../../enums';

export class CodeInvalidException extends UnauthorizedException {
  constructor() {
    super({
      code: ExceptionsEnum.CODE_INVALID,
      message: 'Your provided code is invalid, please try again',
    });
  }
}
