import winston from 'winston';

const severity = winston.format((info) => {
  info['severity'] = info.level.toUpperCase();
  return info;
});

const errorReport = winston.format((info) => {
  if (info instanceof Error) {
    info.err = {
      name: info.name,
      message: info.message,
      stack: info.stack,
    };
  }
  return info;
});

export const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    severity(),
    errorReport(),
    process.env.NODE_ENV === 'production' ? winston.format.json() : winston.format.prettyPrint()
  ),
  transports: [new winston.transports.Console()],
});
