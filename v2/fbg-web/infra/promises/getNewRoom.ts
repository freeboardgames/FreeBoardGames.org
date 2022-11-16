import { getServer } from "./getServer";

export interface FbgNewRoomResult {
  roomID: string;
  serverIndex: number;
}

export interface FbgNewRoomInput {
  signal: AbortSignal;
  gameId: string;
  nickname: string;
  numPlayers: number;
}

export async function getNewRoom(
  input: FbgNewRoomInput
): Promise<FbgNewRoomResult> {
  const server = await getServer(input.signal);
  const data = { numPlayers: input.numPlayers, unlisted: true };
  const response = await fetch(
    `${location.protocol}//${server.hostname}/games/${input.gameId}/create`,
    {
      signal: input.signal,
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!response.ok) {
    throw new Error(`New Room failed: ${response.status}, ${response.body}`);
  }
  const json = await response.json();
  const roomID = json["matchID"] as string;
  return { roomID, serverIndex: server.index };
}
