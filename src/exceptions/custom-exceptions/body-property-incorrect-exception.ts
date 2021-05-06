import { BadRequestException } from '@nestjs/common';

import { ExceptionsEnum } from '../../enums';

export class BodyPropertyIncorrectException extends BadRequestException {
  constructor(propertyName?: string) {
    super({
      code: ExceptionsEnum.BODY_PROPERTY_INCORRECT,
      message: `You cannot send ${propertyName} through this route`,
    });
  }
}
