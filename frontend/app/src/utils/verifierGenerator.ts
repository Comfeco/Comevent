export const makeRandomValue = (length: number): string => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length })
    .map(() => characters[Math.floor(Math.random() * characters.length)])
    .join('');
};
