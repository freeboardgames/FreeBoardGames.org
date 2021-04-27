/// <reference types="node" />

declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_I18N_ENABLED?: 'true' | 'false';
  }
}
