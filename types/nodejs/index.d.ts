declare namespace NodeJS {
  interface ProcessEnv {
    NODE_ENV: string;
    PORT: number;
    DB_HOST: string;
    DB_PORT: number;
    DB_NAME: string;
    DB_USER: string;
    DB_PASS: string;
    HASH_SALT: number;
    SEED_DATA: number;
    JWT_SECRET: string;
    DB_SYNC: boolean;
    CLIENT_URL: string;
    NODEMAILER_USER: string;
    PASS_GMAIL: string;
    BASE_API: string;
    JWT_EXPIRATION: string;
    GOOGLE_CLIENT_ID: string;
    GOOGLE_CLIENT_SECRET: string;
    GOOGLE_URL: string;
    SECURE: boolean;
    MAX_AGE: number;
    FACEBOOK_CLIENT_ID: string;
    FACEBOOK_CLIENT_SECRET: string;
    FACEBOOK_URL: string;
    GITHUB_CLIENT_ID: string;
    GITHUB_CLIENT_SECRET: string;
    GITHUB_CALLBACK_URL: string;
  }
}
