declare global {
  namespace jest {
    interface Matchers<R> {
      toContainText(expected: string): R;
    }
  }
}

export {};
