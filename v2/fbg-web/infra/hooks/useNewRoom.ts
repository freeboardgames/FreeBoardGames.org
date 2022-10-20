import { useState, useEffect } from "react";

export interface FbgNewRoomResult {
  loaded: boolean;
  success?: boolean;
  roomId?: string;
}

export interface FbgNewRoomInput {
  hostname: string;
  gameId: string;
  nickname: string;
  numPlayers: number;
}

export function useNewRoom(): [
  FbgNewRoomResult,
  (input: FbgNewRoomInput) => void
] {
  const initialState: FbgNewRoomResult = { loaded: false };
  const [newRoom, setNewRoom] = useState(initialState);
  const createNewRoom = (input: FbgNewRoomInput) => {
    const data = { numPlayers: input.numPlayers, unlisted: true };
    fetch(
      `${location.protocol}//${input.hostname}/games/${input.gameId}/create`,
      {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then(
        (responseJson) => {
          const roomId = responseJson["matchID"];
          setNewRoom({ loaded: true, success: true, roomId });
        },
        (error) => {
          console.error(error);
          setNewRoom({ loaded: true, success: false });
        }
      );
  };
  return [newRoom, createNewRoom];
}
