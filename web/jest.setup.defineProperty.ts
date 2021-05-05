// prevent object freezing - fixes an issue with disabling the zone.js definePropety patch
// https://github.com/facebook/jest/issues/6914#issuecomment-654710111
const { defineProperty } = Object;

Object.defineProperty = (object, name, meta) => {
  if (meta.get && !meta.configurable) {
    return defineProperty(object, name, {
      ...meta,
      configurable: true,
    });
  }
  return defineProperty(object, name, meta);
};

export {};
