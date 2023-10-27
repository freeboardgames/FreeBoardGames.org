import { useState, useEffect } from "react";

export interface FbgLogin {
  resolved: boolean;
  nickname?: string;
}
const LOCALSTORAGE_KEY = "fbgNickname2";

function getNickname(): string | null {
  const savedNickname = localStorage.getItem(LOCALSTORAGE_KEY);
  return savedNickname;
}

function setNickname(nickname: string) {
  localStorage.setItem(LOCALSTORAGE_KEY, nickname);
}

export function useLogin(): [FbgLogin, (nickname: string) => void] {
  const initialState: FbgLogin = { resolved: false };
  const [login, setLogin] = useState(initialState);
  useEffect(() => {
    const savedNickname = getNickname();
    if (savedNickname) {
      setLogin({ resolved: true, nickname: savedNickname });
    } else {
      setLogin({ resolved: true });
    }
    return () => {};
  }, []);
  const setAndSaveLogin = (nickname: string) => {
    setNickname(nickname);
    setLogin({ resolved: true, nickname });
  };
  return [login, setAndSaveLogin];
}
