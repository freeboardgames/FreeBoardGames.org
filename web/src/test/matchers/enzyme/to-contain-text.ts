expect.extend({
  toContainText(received, expected) {
    try {
      const text = received?.hostNodes?.().text();
      expect(text).toContain(expected);
    } catch (e) {
      return { pass: false, message: () => e.message };
    }
    return { pass: true, message: () => '' };
  },
});

export {};
