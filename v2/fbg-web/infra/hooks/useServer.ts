import { useState, useEffect } from "react";

const FBG_SERVERS = ["charizard", "pikachu"];

const LOCAL_SERVERS = ["localhost", "foo", "bar"];

export interface FbgServer {
  resolved: boolean;
  serversDown?: string[];
  hostname?: string;
}

export function useServer(): FbgServer {
  const initialState: FbgServer = { resolved: false };
  const [server, setServer] = useState(initialState);

  useEffect(() => {
    (async () => {
      let serverList = getServerList();
      serverList.sort(() => Math.random() - 0.5);
      for (const server of serverList) {
        if (await isServerUp(server)) {
          setServer({ resolved: true, hostname: server });
          return;
        }
      }
      serverList.sort();
      setServer({ resolved: false, serversDown: serverList });
    })();
    return () => {};
  }, []);

  return server;
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
  return FBG_SERVERS.map((x) => `${x}.freeboardgames.org`);
}

async function isServerUp(server: string): Promise<boolean> {
  return false;
}
