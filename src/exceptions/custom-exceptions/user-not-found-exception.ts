import { NotFoundException } from '@nestjs/common';

import { ExceptionsEnum } from '../../enums';

export class UserNotFoundException extends NotFoundException {
  constructor() {
    super({ code: ExceptionsEnum.USER_NOT_FOUND, message: 'User not found' });
  }
}
