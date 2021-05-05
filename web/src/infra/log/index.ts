import Pino from 'pino';

export const createLogger = (context: string) => {
  const logContextEnv = process.env.NEXT_PUBLIC_LOG_CONTEXT || '';
  const logContexts = logContextEnv.split(',');
  const logEnabled = logContexts.includes(context);

  const logger = Pino({
    name: context,
    level: 'debug',
    browser: { asObject: true },
    prettyPrint: { translateTime: true },
    enabled: logEnabled,
    timestamp: () => new Date().toISOString(),
  });

  return logger;
};
