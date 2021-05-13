const denylist = [
  'react-i18next:: It seems you are still using the old wait option, you may migrate to the new useSuspense behaviour.',
];

/* eslint-disable no-console */
const warn = console.warn;
jest.spyOn(console, 'warn').mockImplementation((...[message, ...args]) => {
  if (!denylist.includes(message)) {
    warn(...[message, ...args]);
  }
});
/* eslint-enable no-console */

export {};
