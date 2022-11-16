const LOCALSTORAGE_KEY = "fbgNickname2";

export function getNickname(): string | null {
  const savedNickname = localStorage.getItem(LOCALSTORAGE_KEY);
  return savedNickname;
}

export function setNickname(nickname: string) {
  localStorage.setItem(LOCALSTORAGE_KEY, nickname);
}
