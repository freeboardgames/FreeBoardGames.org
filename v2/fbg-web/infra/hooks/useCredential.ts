import { useState, useEffect } from "react";

export interface Credential {
  playerID: string;
  playerCredentials: string;
}

export interface FbgCredentialResult {
  loaded: boolean;
  credential?: Credential;
  error?: string;
}

export interface FbgCredentialInput {
  hostname: string;
  serverId: number;
  gameId: string;
  roomId: string;
  nickname: string;
}

export function useCredential(input: FbgCredentialInput): FbgCredentialResult {
  const initialState: FbgCredentialResult = { loaded: false };
  const [credential, setCredential] = useState(initialState);
  useEffect(() => {
    const savedCredential = localStorage.getItem(getKey(input));
    if (savedCredential) {
      const credential: Credential = JSON.parse(savedCredential);
      setCredential({ loaded: true, credential });
      return;
    }
    join(input).then((credential) => {
      setCredential({ loaded: true, credential });
    }, (error: any) => {
      setCredential({ loaded: true, error: `${error}`});
    });
  });
  return credential;
}

function getKey(input: FbgCredentialInput) {
  return `credential-${input.serverId}-${input.roomId}`
}

async function join(input: FbgCredentialInput): Promise<Credential> {
  const protocol = location.protocol || "http:";
  const url = `${protocol}//${input.hostname}/games/${input.gameId}/${input.roomId}/join`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      playerID: '1', // TODO new to detect next playerID
      playerName: input.nickname
    })
  });
  if (!response.ok) {
    const text = await response.text();
    throw new Error(`Join failed: ${response.status}, ${text}`);
  }
  return (await response.json()) as Credential;
}