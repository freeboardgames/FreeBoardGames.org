import { FbgNewRoomResult, getNewRoom } from "infra/promises/getNewRoom";
import { useState, useEffect } from "react";

export interface NewRoomState {
  resolved: boolean;
  result?: FbgNewRoomResult;
  error?: string;
}

export function useNewRoom({
  gameId,
  numPlayers,
  nickname,
}: {
  gameId: string;
  numPlayers: number;
  nickname?: string;
}): NewRoomState {
  const initialState: NewRoomState = { resolved: false };
  const [newRoom, setNewRoom] = useState(initialState);
  useEffect(() => {
    if (!nickname) {
      return;
    }
    const abortController = new AbortController();
    getNewRoom({
      signal: abortController.signal,
      gameId,
      numPlayers,
      nickname,
    }).then(
      (result) => {
        setNewRoom({ resolved: true, result });
      },
      (error) => {
        setNewRoom({ resolved: true, error: error.toString() });
      }
    );
    return () => {
      abortController.abort();
    };
  }, [nickname]);
  return newRoom;
}
