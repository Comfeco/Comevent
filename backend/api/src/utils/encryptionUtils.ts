import bcrypt from "bcrypt";
import crypto from 'crypto';

export default {
  async hashPassword(password: string): Promise<string> {
    let salt = await bcrypt.genSalt();
    return await bcrypt.hash(password, salt);
  },
  generateSecurityStamp(): string {
    // 256 bit
    return crypto.randomBytes(32).toString("hex");
  },

  checkHash(value: string, hash: string) {
    return bcrypt.compare(value, hash);
  },
  normalizeKey(key: string) {
    return crypto.createHash('sha256').update(String(key)).digest('base64').substr(0, 32);
  },
  encryptString(plainText: string, secret: string): string {
    if (!plainText || plainText.length === 0) {
      return plainText;
    }
    if (!secret || secret.length === 0) {
      throw new Error('you must pass a secret');
    }
    secret = this.normalizeKey(secret)

    const ivBytes: Buffer = crypto.randomBytes(16);
    const ivText: string = ivBytes.toString('base64');
    // encrypt using aes256 iv + key + plainText = encryptedText
    const cipher: crypto.Cipher = crypto.createCipheriv('aes-256-cbc', secret, ivBytes);
    let encryptedValue: string = cipher.update(plainText, 'utf8', 'base64');
    encryptedValue += cipher.final('base64');

    //p5Cp7m/wgGQtvGKFbDKb2g==!zJjlQ3Io4bDdISw/rDGspTY0/kOeIA6RUFnB/9OXtMbF5Jia+4gbhYJ0MBlldzx9f3K2ePY9WfFEHN6WajYP1B6lqyqF5MxEktBGdk2rcE8sBrNxclXS6sEQFNxuOzsb
    return `${ivText}!${encryptedValue}`;
  },
  decryptString(encryptedValue: string, secret: string): string {

    if (!encryptedValue || encryptedValue.length === 0) {
      return encryptedValue;
    }

    if (!secret || secret.length === 0) {
      throw new Error('you must pass a secret');
    }
    secret = this.normalizeKey(secret);

    const parts: string[] = encryptedValue.split('!');
    if (parts.length !== 2) {
      throw new Error('The encrypted value is not a valid format');
    }

    const ivText: string = parts[0];
    const encryptedText: string = parts[1];
    const ivBytes: Buffer = Buffer.from(ivText, 'base64');

    if (ivBytes.length !== 16) {
      throw new Error('The encrypted value is not a valid format');
    }

    // decrypt using aes256 iv + key + encryptedText = decryptedText
    const decipher: crypto.Decipher = crypto.createDecipheriv('aes-256-cbc', secret, ivBytes);

    let value: string = decipher.update(encryptedText, 'base64', 'utf8');

    value += decipher.final('utf8');

    return value;

  },


  HashString(value: string): string {
    return crypto.createHash('sha256').update(value).digest('hex');
  }
}
