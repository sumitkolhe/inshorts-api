import type { Config } from '../interfaces/config.interface'

export const devConfig: Config = {
  env: 'development',
  server: {
    host: 'localhost',
    port: 3000,
  },
  cors: {
    origin: true,
    credentials: true,
  },
  log: {
    format: 'dev',
    level: 'debug',
  },
}
