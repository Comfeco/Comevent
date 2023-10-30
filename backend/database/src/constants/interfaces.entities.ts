export enum ROLES {
  ADMIN = 'ADMIN',
  PREMIUM = 'PREMIUM',
  CREATOR = 'CREATOR',
  USER = 'USER', // default role
}

export enum ACCES_LEVEL {
  DEVELOPER = 30,
  MANTEINER = 40,
  OWNER = 50,
}

export enum STATUS_TASK {
  CREATED = 'CREATED',
  IN_PROGRESS = 'IN_PROGRESS',
  FINISH = 'FINISH',
}

export enum BLOCKED_TIME {
  ONE_HOUR = 3600000,
  ONE_DAY = 86400000,
  THREE_DAYS = 259200000,
  FIVE_DAYS = 432000000,
  FIFTEEN_DAYS = 1296000000,
  ONE_MONTH = 2592000000,
  ONE_WEEK = 604800000,
  PERMANENT = -1,
}

export enum AuthProvider {
  GOOGLE = 'google',
  FACEBOOK = 'facebook',
  DISCORD = 'discord',
  GITHUB = 'github',
}
