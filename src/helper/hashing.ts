import * as Argon2 from 'argon2';

/**
 * Hash a code and return the hashed string
 * @param code The input code to be hashed
 * @returns The hashed code
 */
export function hashString(code: string): Promise<string> {
  return Argon2.hash(code, { type: Argon2.argon2id });
}

/**
 * Checks the code with a hashed code
 * @param hashedCode The hash code to verify to
 * @param code The user code to verity
 * @returns True on success
 */
export function verifyHash(hashedCode: string, code: string): Promise<boolean> {
  return Argon2.verify(hashedCode, code, { type: Argon2.argon2id });
}
