if (typeof window !== 'undefined') {
  const swRegisterMock = jest.fn();
  const mockPromise = new Promise(function (resolve) {
    resolve({ update: jest.fn() });
  });
  swRegisterMock.mockReturnValue(mockPromise);
  (global as any).navigator.serviceWorker = {
    register: swRegisterMock,
  };
}

export {};
