import { ArgumentMetadata, Injectable, PipeTransform } from '@nestjs/common';
/**
 * @description trim body requests with string type
 * @returns trimmed request `values`
 */

@Injectable()
export class TrimPipe implements PipeTransform {
  //  only objects will be approved.
  private _checkObject(obj: any): boolean {
    return typeof obj === 'object' && obj !== null;
  }
  private _trimBodyRequest(values:any) {
    Object.keys(values).forEach(key => {
      if (key !== 'password' && key !== 'confirmPassword') {
        if (this._checkObject(values[key])) {
          values[key] = this._trimBodyRequest(values[key]);
          return;
        }
        if (typeof values[key] === 'string') {
          values[key] = values[key].trim();
        }
      }
    });
    return values;
  }

  transform(values: any, metadata: ArgumentMetadata): void {
    const { type } = metadata;
    if (this._checkObject(values) && type === 'body') {
      return this._trimBodyRequest(values);
    }
    return values;
  }
}
