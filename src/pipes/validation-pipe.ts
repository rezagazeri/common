import {
  ArgumentMetadata,
  BadRequestException,
  HttpStatus,
  Injectable,
  PipeTransform,
} from '@nestjs/common';
import { HttpException } from '@nestjs/common/exceptions/http.exception';
import { plainToClass } from 'class-transformer';
import { validate, ValidationError } from 'class-validator';

/**
 * @description validation pipe is responsible for validation input data
 */
@Injectable()
export class ValidationPipe implements PipeTransform<any> {
  async transform(value:any, metadata: ArgumentMetadata) {
    if (!value) {
      throw new BadRequestException('data not recieved');
    }

    const { metatype } = metadata;
    if (!metatype || !this._toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors: ValidationError[] = await validate(object);
    if (errors.length > 0) {
      throw new HttpException(
        {
          message: 'Input data validation failed',
          errors: this._buildError(errors),
        },
        HttpStatus.BAD_REQUEST,
      );
    }
    return value;
  }
  /**
   * @description  create custom message base as errors constraints
   * @param {errors : validationerrors}
   */

  private _buildError(errors:ValidationError[]) {
    const result:any = {};
    errors.forEach(el => {
      let prop = el.property;
      let constrain :any = el.constraints;
      Object.entries(constrain).forEach(constraint => {
        result[prop + constraint[0]] = `${constraint[1]}`;
      });
    });
    return result;
  }

  /**
   * @description  here we make sure for metatype types
   * @param {metatype :boolean}
   */
  private _toValidate(metatype: any): boolean {
    const types = [String, Boolean, Number, Array, Object];
    return !types.find(type => metatype === type);
  }
}
