export const mix = <TOriginal extends object, TAdditional>(
  original: TOriginal,
  assign: TAdditional,
): TOriginal & TAdditional => {
  const copy = { ...original, ...assign };
  const props = Object.getOwnPropertyNames(original);
  for (const prop of props) {
    const descriptor = Object.getOwnPropertyDescriptor(original, prop);
    Object.defineProperty(copy, prop, descriptor);
  }
  return copy;
};
