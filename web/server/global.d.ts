/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly NEXT_PUBLIC_I18N_ENABLED?: 'true' | 'false';
  }
}
