import Cookies from 'js-cookie';

export function AuthHelper() {
  const nickname = Cookies.get('nickname');
  const token = Cookies.get('token');
  if (!nickname || !token) return undefined;
  return { nickname, token };
}
