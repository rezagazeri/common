import { UnauthorizedException } from '@nestjs/common';

import { ExceptionsEnum } from '../../enums';

export class UserNotVerifiedException extends UnauthorizedException {
  constructor() {
    super({
      code: ExceptionsEnum.USER_NOT_VERIFIED,
      message: 'You account is not verified',
    });
  }
}
