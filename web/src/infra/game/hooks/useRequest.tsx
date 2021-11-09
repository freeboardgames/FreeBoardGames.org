import React from 'react';
import { unstable_batchedUpdates } from 'react-dom';
import useAsyncEffect from 'use-async-effect';

type Status = 'idle' | 'success' | 'loading' | 'error';

export function useRequest<Data, Response = Data | undefined>(
  request: () => Promise<Response>,
  intialState: Status = 'idle',
) {
  const [status, setStatus] = React.useState<Status>(intialState);
  const [data, setData] = React.useState<Response>();

  useAsyncEffect(async () => {
    try {
      setStatus('loading');
      const response = await request();
      unstable_batchedUpdates(() => {
        setData(response);
        setStatus('success');
      });
    } catch (e) {
      setStatus('error');
    }
  }, []);

  return { status, data };
}
