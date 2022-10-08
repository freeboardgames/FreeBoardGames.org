import { useState, useEffect } from "react";

const FBG_SERVERS = [null, "charizard", "pikachu"];

const LOCAL_SERVERS = wrapWithIndex([null, "localhost:8001"]);

export interface FbgServer {
  resolved: boolean;
  serversDown?: string[];
  hostname?: string;
  index?: number;
}

export function useServer(i?: number): FbgServer {
  const initialState: FbgServer = { resolved: false };
  const [server, setServer] = useState(initialState);

  useEffect(() => {
    (async () => {
      let serverList = getServerList();
      if (i) {
        setServer(getFbgServer(serverList[i]));
        return;
      }
      serverList.sort(() => Math.random() - 0.5);
      for (const server of serverList) {
        if (await isServerUp(server.hostname)) {
          setServer(getFbgServer(server));
          return;
        }
      }
      serverList.sort();
      const serversDown = serverList
        .filter((x) => x.hostname !== null)
        .map((x) => x.hostname!);
      setServer({ resolved: true, serversDown });
    })();
    return () => {};
  }, []);

  return server;
}

function getFbgServer(server: {
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

async function isServerUp(hostname: string | null): Promise<boolean> {
  if (!hostname) {
    return false;
  }
  const protocol = location.protocol || "http:";
  let response;
  try {
    response = await fetch(`${protocol}//${hostname}/open`);
  } catch (e) {
    return false;
  }
  if (!response.ok) {
    return false;
  }
  const text = await response.text();
  return text === "open";
}
