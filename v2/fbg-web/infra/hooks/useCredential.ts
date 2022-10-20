import { useState, useEffect } from "react";

export interface Credential {
  playerID: string;
  playerCredentials: string;
}

export interface FbgCredentialResult {
  loaded: boolean;
  credential?: Credential;
}

export interface FbgCredentialInput {
  hostname: string;
  gameId: string;
  roomId: string;
}

export function useCredential(input: FbgCredentialInput): FbgCredentialResult {
  return {
    loaded: true,
    credential: { playerID: "0", playerCredentials: "foo" },
  };
}
