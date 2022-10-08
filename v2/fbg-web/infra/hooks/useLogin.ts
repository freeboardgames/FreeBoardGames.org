import { useState, useEffect } from "react";

const LOCALSTORAGE_KEY = "fbgNickname2";

export interface FbgLogin {
  loaded: boolean;
  loggedIn: boolean;
  nickname?: string;
}

export function useLogin(): [FbgLogin, (nickname: string) => void] {
  const initialState: FbgLogin = { loaded: false, loggedIn: false };
  const [login, setLogin] = useState(initialState);
  useEffect(() => {
    const savedNickname = localStorage.getItem(LOCALSTORAGE_KEY);
    console.log("NICKNAME: " + savedNickname);
    if (savedNickname) {
      console.log("loggedIn!");
      setLogin({ loaded: true, loggedIn: true, nickname: savedNickname });
    }
    setLogin({ loaded: true, loggedIn: false });
  }, []);
  const setAndSaveLogin = (nickname: string) => {
    localStorage.setItem(LOCALSTORAGE_KEY, nickname);
    setLogin({ loaded: true, loggedIn: true, nickname });
  };
  return [login, setAndSaveLogin];
}
