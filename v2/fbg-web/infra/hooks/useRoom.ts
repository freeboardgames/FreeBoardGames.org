import { useState, useEffect } from "react";

export interface FbgRoomResult {
  loaded: boolean;
  matchStarted?: boolean;
}

export interface FbgRoomInput {
  hostname: string;
  nickname: string;
  gameId: string;
  roomId: string;
}

export function useRoom(): FbgRoomResult {
  // useCredential
  return { loaded: true, matchStarted: false };
}
