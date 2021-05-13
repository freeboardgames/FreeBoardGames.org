declare global {
  namespace jest {
    interface Matchers<R> {
      toHaveText(expected: string): R;
    }
  }
}

export {};
