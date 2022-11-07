import { useState, useEffect } from "react";
import { useCredential } from "./useCredential";

export interface FbgRoomResult {
  loaded: boolean;
  credential: any;
  matchStarted?: boolean;
}

export interface FbgRoomInput {
  hostname: string;
  nickname: string;
  serverId: number;
  gameId: string;
  roomId: string;
}

export function useRoom(input: FbgRoomInput): FbgRoomResult {
  const credential = useCredential(input);
  return { loaded: true, matchStarted: false, credential };
}
