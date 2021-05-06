import { ForbiddenException } from '@nestjs/common';

import { ExceptionsEnum } from '../../enums';

export class PermissionDeniedException extends ForbiddenException {
  constructor() {
    super({
      code: ExceptionsEnum.PERMISSION_DENIED,
      message: "You don't have permission to access",
    });
  }
}
