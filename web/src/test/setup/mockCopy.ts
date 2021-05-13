jest.mock('copy-to-clipboard', () => {
  (global as any).copyClipboardMock = jest.fn();
  return (global as any).copyClipboardMock;
});

export {};
