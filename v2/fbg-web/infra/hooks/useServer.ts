import { useState, useEffect } from "react";

const FBG_SERVERS = [null, "charizard", "pikachu"];

const LOCAL_SERVERS = wrapWithIndex([null, "localhost:8001"]);

export interface FbgServer {
  resolved: boolean; 
  hostname?: string;
  index?: number;
  error?: string;
}

export function useServer(i?: number): FbgServer {
  const initialState: FbgServer = { resolved: false };
  const [server, setServer] = useState(initialState);

  useEffect(() => {
    const abortController = new AbortController();
    getServer(abortController.signal, i).then((server) => {
      setServer(server);
    }, (error) => {
      setServer({ resolved: true, error: error.toString() })
    })
    return () => { abortController.abort(); };
  }, []);

  return server;
}

export async function getServer(signal: AbortSignal, i?: number): Promise<FbgServer> {
  let serverList = getServerList();
  if (i) {
    return convertServer(serverList[i]);
  }
  serverList.sort(() => Math.random() - 0.5);
  for (const server of serverList) {
    if (await isServerUp(signal, server.hostname)) {
      return convertServer(server);
    }
  }
  serverList.sort();
  throw new Error("All servers are offline.");
} 

function convertServer(server: {
  hostname: string | null;
  index: number;
}): FbgServer {
  const hostname = server.hostname!;
  const index = server.index;
  return { resolved: true, hostname, index };
}

function getServerList() {
  if (!location) {
    return LOCAL_SERVERS;
  }
  if (!location.hostname) {
    return LOCAL_SERVERS;
  }
  if (location.hostname.toLowerCase() != "www.freeboardgames.org") {
    return LOCAL_SERVERS;
  }
  return wrapWithIndex(
    FBG_SERVERS.map((x) => (x ? `${x}.freeboardgames.org:8001` : null))
  );
}

function wrapWithIndex(
  serverList: (string | null)[]
): { hostname: string | null; index: number }[] {
  return serverList.map((hostname, index) => ({ hostname, index }));
}

async function isServerUp(signal: AbortSignal, hostname: string | null): Promise<boolean> {
  if (!hostname) {
    return false;
  }
  const protocol = location.protocol || "http:";
  let response;
  try {
    response = await fetch(`${protocol}//${hostname}/open`, {signal});
  } catch (e) {
    return false;
  }
  if (!response.ok) {
    return false;
  }
  const text = await response.text();
  return text === "open";
}
