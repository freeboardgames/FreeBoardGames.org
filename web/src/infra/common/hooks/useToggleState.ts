import { useState, useCallback } from 'react';

export const useToggleState = (initialState: boolean): [boolean, () => void] => {
  const [state, setState] = useState(initialState);

  const toggle = useCallback(() => setState((curState) => !curState), []);

  return [state, toggle];
};
