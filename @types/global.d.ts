import { Global as GlobalType } from '@jest/types';

interface Global extends GlobalType.Global {
  baseURL: string;
}

declare class PuppeteerEnvironment implements JestEnvironment {
  global: Global;
}

declare global {
  const baseURL: string;
  const viewports: { PHONE_WIDTH: number; PHONE_HEIGHT: number; TABLET_WIDTH: number; TABLET_HEIGHT: number };
  const setPhoneViewport: () => void;
  const setTabletViewport: () => void;
}

export = PuppeteerEnvironment;
