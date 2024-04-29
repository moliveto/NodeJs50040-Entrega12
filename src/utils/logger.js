import winston from 'winston';
const { combine, timestamp, printf, colorize, json } = winston.format;

export const logger = winston.createLogger({
    level: 'info',
    format: combine(
        timestamp({
            format: 'YYYY-MM-DD HH:mm:ss'
        }),
        json(),
    ),
    transports: [
        new winston.transports.Console(),
        new winston.transports.File({
            filename: './logs/log',
            level: 'warn',
        })
    ],
});