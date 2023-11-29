export function decodeAndGetPayload(token: string) {
  const splitedToken = token.split('.');

  if (splitedToken.length === 3) {
    const payload = splitedToken[1];
    const decodedPayload = JSON.parse(atob(payload));
    return decodedPayload;
  }

  return null;
}
