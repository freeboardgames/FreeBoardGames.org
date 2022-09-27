import { useState, useEffect } from "react";

const LOCALSTORAGE_KEY = "fbgNickname2";

export interface FbgLogin {
  loggedIn: boolean;
  nickname?: string;
}

export function useLogin(): [FbgLogin, (nickname: string) => void] {
  const initialState: FbgLogin = { loggedIn: false };
  const [login, setLogin] = useState(initialState);
  useEffect(() => {
    const savedNickname = localStorage.getItem(LOCALSTORAGE_KEY);
    if (savedNickname) {
      setLogin({ loggedIn: true, nickname: savedNickname });
    }
  }, []);
  const setAndSaveLogin = (nickname: string) => {
    localStorage.setItem(LOCALSTORAGE_KEY, nickname);
    setLogin({ loggedIn: true, nickname });
  };
  return [login, setAndSaveLogin];
}
