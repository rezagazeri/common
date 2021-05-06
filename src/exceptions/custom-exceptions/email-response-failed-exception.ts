import { InternalServerErrorException } from '@nestjs/common';

import { ExceptionsEnum } from '../../enums';

export class EmailResponseFailedException extends InternalServerErrorException {
  constructor() {
    super({
      code: ExceptionsEnum.EMAIL_RESPONSE_FAILED,
      message: 'There was an error sending the email, try again later',
    });
  }
}
