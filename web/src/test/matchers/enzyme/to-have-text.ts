expect.extend({
  toHaveText(got, expected) {
    const text = got?.hostNodes?.().text();

    return {
      pass: text === expected,
      message: () => `Expected element to have text content: ${expected} Received: ${got.hostNodes().text()}`,
    };
  },
});

export {};
