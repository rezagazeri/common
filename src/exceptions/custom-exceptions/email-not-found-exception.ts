import { NotFoundException } from '@nestjs/common';

import { ExceptionsEnum } from '../../enums';

export class EmailNotFoundException extends NotFoundException {
  constructor() {
    super({
      code: ExceptionsEnum.EMAIL_NOT_FOUND,
      message: 'Your email is not found',
    });
  }
}
