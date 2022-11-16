import { getNickname, setNickname } from "infra/misc/login";
import { useState, useEffect } from "react";

export interface FbgLogin {
  resolved: boolean;
  nickname?: string;
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
