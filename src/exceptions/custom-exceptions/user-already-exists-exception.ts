import { BadRequestException } from '@nestjs/common';

import { ExceptionsEnum } from '../../enums';

export class UserAlreadyExistsException extends BadRequestException {
  constructor() {
    super({
      code: ExceptionsEnum.USER_ALREADY_EXISTS,
      message: 'This user already exists',
    });
  }
}
