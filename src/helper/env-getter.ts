export class Env {
  static getString(key: string, defaultValue?: string): string | undefined {
    return process.env[key] ?process.env[key]: defaultValue;
  }

  static getNumber(key: string, defaultValue?: number): number {
    const value = this.getString(key);
    return value ? Number(value) : Number(defaultValue);
  }

  static getBoolean(key: string, defaultValue?: boolean): boolean {
    const value = this.getString(key);
    return value ? Boolean(value) : Boolean(defaultValue);
  }
}
