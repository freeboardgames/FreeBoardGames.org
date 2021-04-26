const allowedKeys = new Set(['I18N_ENABLED']);

for (const key of Object.keys(process.env)) {
  (process.env as Record<string, unknown>) = {
    ...process.env,
    [key]: allowedKeys.has(key) ? parseKey(`${process.env[key]}`) : process.env[key],
  };
}

function parseKey(value: string) {
  // Boolean
  if (value.toString().toLowerCase() === 'true' || value.toString().toLowerCase() === 'false') {
    return value.toString().toLowerCase() === 'true';
  }

  return value;
}

export {};
