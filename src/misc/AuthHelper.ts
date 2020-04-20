import Cookies from 'js-cookie';

export function getAuthData() {
  const nickname = Cookies.get('nickname');
  const token = Cookies.get('token');
  if (!nickname || !token) return undefined;
  return { nickname, token };
}

export function setAuthData(nickname: string, token: string) {
  Cookies.set('nickname', nickname, { sameSite: 'strict' });
  Cookies.set('token', token, { sameSite: 'strict' });
}
